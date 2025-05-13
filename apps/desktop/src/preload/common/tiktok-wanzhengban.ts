import { globalRendererPathParser } from "@/global/global-renderer-path-parser"
import { whenDocumentElementStart } from "@/utils/dom"
import { ipcRenderer } from "electron"
import fs from 'fs'
import PQueue from 'p-queue'

console.log('tiktok', location.href)

const fetchRoomInfoWaitQueue = []
const fetchRoomInfoPendingQueue = []
const maxRoomInfoQueueLimit = 20
let entryRoomErrorCount = 0
let maxEntryRoomErrorCount = 12
let divLiveContentContainerEl: HTMLDivElement
const queue = new PQueue({ concurrency: 1, interval: 0 })


// setTimeout(() => {
//   window.setInterval = () => { }
//   window.setTimeout = () => { }
// }, 3000)

function taskGlobal() {
  document.write('已经被接管')
  window.stop()
}

window.addEventListener('load', taskGlobal)
whenDocumentElementStart(() => [window['MSSDK_INITIALIZED']], 5000).then(taskGlobal)


function getScriptPath(type: string) {
  // type 可能是 socket  require
  const isLLC = !!window['__LOADABLE_LOADED_CHUNKS__']
  console.log('当前使用的是', isLLC ? '__LOADABLE_LOADED_CHUNKS__' : 'webpackChunk_tiktok_webapp_live')
  const fileName = `js/${type}-${isLLC ? 'LOADABLE-LOADED-CHUNKS' : 'webpackChunk_tiktok_webapp_live'}.js`
  return fileName
}
if (inToktokPage()) {
  const typeFileList = [
    408, 801, 2527, 2694, 2709, 3148, 4550, 4628, 4771, 4920, 5029, 5315, 6137, 6215, 6432, 7024, 7854, 8361, 8493, 8575, 9011, 9508, 9761
  ]
  const execFileList = [
    'socket/require.js',
    'socket/lib-base-infra.js',
    'socket/socket-vendor.js',
    'socket/live-vendor.js',
    ...typeFileList.map(num => `socket/types/${num}.js`)
  ]
  Promise.all(
    execFileList.map((file => fs.promises.readFile(globalRendererPathParser.resolveAppRoot(file).toString(), 'utf-8')))
  ).then((codeList) => {
    // console.log("🚀 ~ ).then ~ codeList:", codeList)
    codeList.forEach(code => eval(code))
    window.__require__(800093)
    whenDocumentElementStart(() => [!!window.__socket__], 12000)
      .then(() => {
        main()
      })
  })
}
// window['__HOOK_REQUEST_BEFORE_'] = function (req, init): [any, any] {
//   console.log("🚀 ~ req:", req, init)
//   return [req, init]
// }
// window['__HOOK_REQUEST_'] = function (req, init, res) {
//   console.log("🚀 ~ req:", req)
//   if (req === '/webcast/feed/') {
//     const data_from = init?.data_from || '推荐'
//     parseWebcastFeed(res, data_from)
//   }
//   if (req === '/webcast/room/enter/') {
//     parseRoomEntryInfo(res)
//   }
// }

// const oldFetch = window.fetch
// // @ts-ignore
// window.fetch = async function (...args) {
//   const res: Response = await oldFetch.apply(this, args)
//   const data = await res.clone().json()
//   console.log("🚀 ~ res:", args, res, data)
//   return res
// }


function inToktokPage() {
  return location.href.includes('tiktok.com')
}

function inToktokLivePage() {
  return location.href.includes('tiktok.com/live')
}

function getBrowserEnvConfig() {
  const config: Record<any, any> = {}
  const __PNS_RUNTIME__ = window['__PNS_RUNTIME__']
  if (!__PNS_RUNTIME__) {
    return {}
  }
  const canCrawl = inToktokLivePage()
  const region = window['__PNS_RUNTIME__']?.['pageContext']?.['region'] || ''
  config.region = region.replace('-ttp', '').toUpperCase()
  config.canCrawl = canCrawl
  return config
}

function taskLivePage() {
  if (!inToktokLivePage()) return
  const pageContext = window['__PNS_RUNTIME__']?.pageContext || {}
  if (pageContext.login === '1') {
    divLiveContentContainerEl = document.querySelector<HTMLDivElement>('[class*="DivLiveContentContainer"]')
    divLiveContentContainerEl.innerHTML = `<div> 页面已被接管 </div>`
    Object.assign(divLiveContentContainerEl.style, <CSSStyleDeclaration>{
      backgroundColor: '#FFF',
      fontSize: '3rem',
      color: 'gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    });
  }
}

function parseWebcastFeed(data, data_from) {
  const liveList = data?.data
  if (!liveList) return
  const feedList = liveList
    .map(el => {
      return el.data
    })
    .map((el) => {
      return {
        room_id: el.id_str,
        nickname: el.owner.nickname,
        display_id: el.owner.display_id,
        data_from,
        live_type: el.hashtag?.title || '',
        // fans: roomData.follow_info?.follower_count || 0,
        // follow: roomData.follow_info?.following_count || 0,
      }
    })
  ipcRenderer.invoke('save-queue-feed-live-list', feedList)
}

function parseRoomEntryInfo(data) {
  if (entryRoomErrorCount >= maxEntryRoomErrorCount) {
    divLiveContentContainerEl.innerHTML = '<h1>发生错误次数太多,为避免无限错误, 已主动停止, 请重新开始任务</h1>'
    window.fetch = async function () { return void 0 }
    return
  }
  if (data.status_code !== 0) {
    console.log('进入房间出现错误', data?.data)
    entryRoomErrorCount++
    return
  }
  entryRoomErrorCount = 0
  const roomData = data?.data
  const extra = data?.extra
  if (typeof roomData !== 'object') return
  const totalCoin = roomData.top_fans.reduce((pre, cur) => {
    cur.user.fan_ticket = cur.fan_ticket
    return pre += cur.fan_ticket
  }, 0)
  const room_id = roomData.id_str
  const saveData = {
    room_id,
    is_ecommerce: roomData.existed_commerce_goods,
    region: extra?.region || '',
    coin: totalCoin || 0,
    fans: roomData.follow_info?.follower_count || 0,
    follow: roomData.follow_info?.following_count || 0,
    top_fan_users: roomData.top_fans.map(fans => fans.user) || [],
    audience: roomData.user_count || 0,
    tags: roomData.video_feed_tag || roomData.content_tag || roomData.game_tag_detail?.display_name || '',
  }
  ipcRenderer.invoke('update-queue-feed-live-list', [saveData])
  console.log("房间信息:", room_id, saveData)
}

function fetchEnterRoomData(room_id: string) {
  if (!room_id) throw new Error('room_id is require')
  const config = {
    "this": 'once',
    "method": "post",
    "query": {
      "device_type": "web_h265"
    },
    "body": `enter_source=recommend-next_icon_click&room_id=${room_id.toString()}`,
    "baseUrlType": 4,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  }
  return window['RequestUtils'].post("/webcast/room/enter/", config)
}

function fetchFeed(type: string, fromType: string) {
  const rawRegion = window['__$UNIVERSAL_DATA$__']?.__DEFAULT_SCOPE__?.['webapp.app-context']?.region || '';
  const region = rawRegion.replace('-ttp', '').toUpperCase();
  console.log("🚀 ~ fetchFeed ~ region:", region)
  return window['RequestUtils'].runFetch("/webcast/feed/", {
    "query": {
      "device_type": "web_h264",
      "max_time": 0,
      "hidden_banner": true,
      "channel_id": 42,
      "priority_region": region,
      "req_from": type,
      "content_type": 1
    },
    "baseUrlType": 4,
    "method": "GET",
    "data_from": fromType
  })
}

function fetchRoomHotLoadMore() {
  //  pc_web_suggested_host
  //  pc_web_inner_recommend_room_loadmore
  return fetchFeed('live_mt_pc_web_rec_tab_loadmore', '热门')
}

function fetchPcWebSideFollowDefault() {
  return fetchFeed('pc_web_side_follow_default', '广场')
}

async function loopFetchRoomHotLoadMore() {
  setInterval(async () => {
    const isLoadMore = await ipcRenderer.invoke('can-load-more-feed')
    if (isLoadMore) {
      fetchRoomHotLoadMore()
    }
  }, 6000)
  setInterval(async () => {
    const isLoadMore = await ipcRenderer.invoke('can-load-more-feed')
    if (isLoadMore) {
    }
  }, 36000)
  fetchPcWebSideFollowDefault()
}

async function checkQueueTask() {
  if (fetchRoomInfoWaitQueue.length <= maxRoomInfoQueueLimit) {
    const newQueueData = await ipcRenderer.invoke(
      'get-next-live-room',
      maxRoomInfoQueueLimit - fetchRoomInfoWaitQueue.length
    )
    newQueueData.forEach(task => {
      const found1 = fetchRoomInfoWaitQueue.find(t => t.room_id === task.room_id)
      const found2 = fetchRoomInfoPendingQueue.find(t => t.room_id === task.room_id)
      if (!found1 && !found2) fetchRoomInfoWaitQueue.push(task)
    })
  }
}

function addNewFetchRoomInfoTask() {
  const addTaskNum = queue.concurrency - queue.size - queue.pending
  let successAddNum = 0
  for (let i = 0; i < addTaskNum; i++) {
    const task = fetchRoomInfoWaitQueue.shift()
    if (!task) continue
    fetchRoomInfoPendingQueue.push(task)
    successAddNum++
    queue.add(() => {
      const room_id = task.room_id
      return fetchEnterRoomData(room_id)
        .catch(() => {
          console.log('获取房间详情失败', 'room_id', room_id)
        })
        .finally(() => {
          const taskIndex = fetchRoomInfoPendingQueue.findIndex(t => t == task)
          fetchRoomInfoPendingQueue.splice(taskIndex, 1)
        })
    })
  }
  successAddNum && console.log("成功添加新任务个数: ", successAddNum)
}

function loopFetchRoomInfo() {
  checkQueueTask()
  setInterval(checkQueueTask, 10000)
  // setTimeout(addNewFetchRoomInfoTask, 5000)
  setInterval(addNewFetchRoomInfoTask, 5000)
}

function hookPlayButton() {
  //console.log('script ready!', document.URL);
  const config = { characterData: true, subtree: true, childList: true };
  // Callback function to execute when mutations are observed
  var i = 0;
  const callback = function (mutationsList, observer) {
    //console.log('text change ');
    var controlElement = document.querySelector<HTMLElement>('[data-e2e="control-icon"]');
    if (controlElement) {
      var svgElement = controlElement.querySelector<HTMLElement>('svg'); {
        if (svgElement) {
          if (controlElement.querySelectorAll<HTMLElement>('path').length == 2) {
            //console.log('pause stream', i++);
            controlElement.click()
          }
        }
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(document, config)
}

function main() {
  if (!inToktokPage()) return
  console.log('tiktok main runned')
  // console.log(window['RequestUtils'])
  // hookPlayButton()
  // taskLivePage()
  // loopFetchRoomHotLoadMore()
  // loopFetchRoomInfo()
  const skcoetOptions = {
    "host": "https://webcast.tiktok.com",
    "aid": "1988",
    "appName": "tiktok_web",
    "liveId": "12",
    "versionCode": "270000",
    "debug": false,
    "appLanguage": "en",
    "clientEnter": "1",
    "roomId": "7496678466570750728",
    "identity": "audience",
    "historyCommentCount": 6
  }
  const socket = new window['__socket__']()
  socket.config(skcoetOptions)
  socket.start()
  window['socket'] = socket
  // console.log("🚀 ~ main ~ socket:", socket)
  // "RoomUserSeqMessage"

  socket.on("RoomUserSeqMessage", (data) => {
    console.log(data.common.room_id, data)
  })
  // socket.on("ChatMessage", (...args) => {
  //   console.log(...args)
  // })

  const config = getBrowserEnvConfig()
  ipcRenderer.invoke('update-app-config', config)
}
