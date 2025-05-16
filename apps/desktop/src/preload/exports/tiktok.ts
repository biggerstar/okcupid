import { globalRendererPathParser } from "@/global/global-renderer-path-parser"
import { parseTiktokFeed } from "@/main/windows/browser/common/parse-tiktok-feed"
import { getUserRegionWithBrowser } from "@/main/windows/browser/request-api/get-user-region-browser"
import { whenDocumentElementStart } from "@/utils/dom"
import { ipcRenderer } from "electron"
import fs from 'fs'
import { checkErrorPage } from "../common/check-error-page"
import { useReload } from "../common/use-reload"

console.log('tiktok', location.href)

useReload()
const socketAllList = []
const socketConcurrency = 4
const taskInterval = 15000
const socketTaskDelay = taskInterval / socketConcurrency
const roomMap = new Map()
let divLiveContentContainerEl: HTMLDivElement

console.error = function (...args) {
}
const consoleLog = console.log.bind(console)

let socketFetchErrorCount = 0
setInterval(() => {
  socketFetchErrorCount = 0
}, 30000)

function hookFetch() {
  const oldFetch = window.fetch
  window.fetch = async function (input, init = {}) {
    const url = (input?.['url'] || input).toString()
    const response: Response = await oldFetch.apply(this, [input, init])
    if (url.includes('webcast/feed/?')) {
      // 和下面主动发起 feedFetch 区分开,以便成功区分来源
      // const json = await response.clone().json()
      // setTimeout(() => parseFeedData(json), 200)
    }
    return response
  }
}

function hookXMLHttpRequest() {
  const originalSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (...args: any[]) {
    const url = this._url;
    const isImFetch = url && url.includes('/webcast/im/fetch/')
    const originalOnLoad = this.onload

    if (isImFetch && socketFetchErrorCount > (socketConcurrency * 1.5)) {
      console.warn('im config fetch is limit');
      return
    }

    this.onload = function (...loadArgs) {
      if (this.status === 403) {
        if (isImFetch) socketFetchErrorCount++
      }
      return originalOnLoad?.apply(this, loadArgs);
    };
    return originalSend.apply(this, args);
  };
}


function sleep(ms: number) { // 后面会重置 setTimeout, 这个函数必须存在
  return new Promise(resolve => setTimeout(resolve, ms));
}
function taskGlobal() {
  // document.write('已经被接管')
  // window.stop()  
}
// const { setInterval, setTimeout } = removeIntervalAndTimeout()
window.addEventListener('load', taskGlobal)
whenDocumentElementStart(() => [window['MSSDK_INITIALIZED']], 5000).then(taskGlobal).catch()
checkErrorPage('https://www.tiktok.com/live', setTimeout)

const inToktokPage = () => location.href.includes('tiktok.com')
const inToktokLivePage = () => location.href.includes('tiktok.com/live')

if (inToktokPage()) {
  const typeFileList = [
    408, 801, 2527, 2694, 2709, 3148, 4550, 4628, 4771, 4920, 5029, 5315, 6137, 6215, 6432, 7024, 7854, 8361, 8493, 8575, 9011, 9508, 9761
  ]
  const execFileList = [
    'socket/require.js',
    // 'socket/request/68962.js',
    // 'socket/request/87221.js',
    // 'socket/request/request-vendor.js',
    'socket/lib-base-infra.js',
    'socket/socket-vendor.js',
    'socket/live-vendor.js',
    ...typeFileList.map(num => `socket/types/${num}.js`)
  ]
  Promise.all(
    execFileList.map((file => fs.promises.readFile(globalRendererPathParser.resolveAppRoot(file).toString(), 'utf-8')))
  ).then((codeList) => {
    // consoleLog("🚀 ~ ).then ~ codeList:", codeList)
    codeList.forEach(code => eval(code))
    window.__require__(800093)
    whenDocumentElementStart(() => [!!window.__socket__], 12000)
      .then(() => {
        main()
      })
      .catch((e) => {
        console.log("[whenDocumentElementStart] ", e)
      })
  })
}

window['isSocketError'] = function () {
  let errorCount = 0
  if (roomMap.size < socketConcurrency) return false
  roomMap.forEach(foomInfo => {
    if (foomInfo.socket.error) errorCount++
  })
  consoleLog("🚀 ~  errorCount and socketConcurrency:", errorCount, socketConcurrency)
  return errorCount >= roomMap.size
}

window['isLogined'] = function () {
  return window['__PNS_RUNTIME__']?.['pageContext']?.['login'] === '1'
}

function taskLivePage() {
  if (!inToktokLivePage()) return
  // const pageContext = window['__PNS_RUNTIME__']?.pageContext || {}
  // if (pageContext.login === '1') {
  function take() {
    divLiveContentContainerEl = document.querySelector<HTMLDivElement>('[class*="DivLiveContentContainer"]')
    const pauseEl = document.querySelector<HTMLDivElement>('div[data-testid="control-icon"]')
    if (pauseEl) pauseEl.click()
    if (!divLiveContentContainerEl) return
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
  window.addEventListener('load', take)
  take()
  setTimeout(take, 3000)
  setTimeout(take, 5000)
  setTimeout(take, 8000)
  setTimeout(take, 12000)
  setTimeout(take, 20000)
}

function createSocket() {
  const skcoetOptions = {
    "host": "https://webcast.tiktok.com",
    "aid": "1988",
    "appName": "tiktok_web",
    "liveId": "12",
    "versionCode": "270000",
    "debug": false,
    "appLanguage": "en",
    "clientEnter": "1",
    "identity": "audience",
    "historyCommentCount": 6
  }
  const socket = new window['__socket__']()
  socket.config(skcoetOptions)
  return socket
}

function updateRoomInfoToDB(roomInfo) {
  const updateData = {
    room_id: roomInfo.room_id,
    display_id: roomInfo.display_id,
    region: roomInfo.region,
    coin: roomInfo.data.total,
    rankUsers: roomInfo.data.ranks.map((rank) => {
      rank.user.fan_ticket = rank.score
      return rank.user
    })
  }
  consoleLog("更新到数据库中: ", updateData)
  ipcRenderer.invoke('update-queue-feed-live-list', [updateData])
}

function createSockets() {
  for (let i = 0; i < socketConcurrency; i++) {
    const socket = createSocket()
    socket.___running___ = false
    socketAllList.push(socket)
    socket.on("RoomUserSeqMessage", async (data) => {
      const room_id = data.common.room_id
      const roomInfo = roomMap.get(room_id)
      if (!roomInfo || roomInfo?.done) return
      roomInfo.done = true
      roomInfo.data = data
      const region = await roomInfo.regionPromise
      consoleLog("🚀 ~ socket.on ~ region:", region)
      if (!region) {
        roomInfo.done = false
        return
      }
      roomInfo.socket.error = false
      roomInfo.region = region
      updateRoomInfoToDB(roomInfo)
    })
    socket.on('RoomManageMessage', (data) => {
      consoleLog("🚀 ~ socket.on ~ RoomManageMessage:", data)
    })
    socket.on('RoomIntroMessage', (data) => {
      consoleLog("🚀 ~ socket.on ~ RoomIntroMessage:", data)
    })
    socket.on('RoomEventMessage', (data) => {
      consoleLog("🚀 ~ socket.on ~ RoomEventMessage:", data)
    })
    socket.on('RoomConfigMessage', (data) => {
      consoleLog("🚀 ~ socket.on ~ RoomConfigMessage:", data)
    })
    socket.on('RoomStartMessage', (data) => {
      consoleLog("🚀 ~ socket.on ~ RoomStartMessage:", data)
    })
  }
  consoleLog('已成功创建', socketConcurrency, '个 sockets ')
}

async function resumeSocketRoom(socket, roomId) {
  if (!socket.___running___) {
    socket.start({ roomId: roomId })
    socket.___running___ = true
  } else {
    socket.pause()
    socket.resume({ roomId: roomId })
  }
}

async function addSocketTask() {
  const canMoreLoad = await ipcRenderer.invoke('get-task-running-status')
  console.log("🚀 ~ addSocketTask ~ canMoreLoad:", canMoreLoad)
  if (!canMoreLoad) return
  roomMap.forEach(roomInfo => roomInfo.done && roomMap.delete(roomInfo.room_id))
  if (socketConcurrency <= roomMap.size) return
  const isError = window['isSocketError']()
  if (isError) {
    location.reload()
  }
  const newQueueData: any[] = await ipcRenderer.invoke(
    'get-next-live-room-task',
    socketAllList.length
  )
  consoleLog("🚀 ~ addSocketTask ~ newQueueData:", newQueueData)
  const maxLen = Math.min(newQueueData.length, socketAllList.length)
  for (let i = 0; i < maxLen; i++) {
    const socket = socketAllList[i]
    const task = newQueueData[i]
    if (roomMap.has(task.room_id)) {
      consoleLog('任务已存在, 不进行添加:', task.room_id)
      continue
    }
    const roomInfo: any = {
      room_id: task.room_id,
      display_id: task.display_id,
      task,
      done: false,
      socket,
    }
    roomMap.set(task.room_id, roomInfo)
    await sleep(socketTaskDelay)
    // roomInfo.regionPromise = ipcRenderer.invoke('get-user-region', task.display_id)
    roomInfo.regionPromise = getUserRegionWithBrowser(task.display_id),
      // regionPromise: (async () => {
      //   let region = await getUserRegionWithBrowser(task.display_id)
      //   if (!region) return getUserRegion(task.display_id)
      //   return region
      // })(),
      resumeSocketRoom(socket, task.room_id)
    consoleLog('切换房间号', task.room_id, task.display_id)
    // 超时删除，表示没有在直播
    setTimeout(() => {
      const roomInfo = roomMap.get(task.room_id)
      if (!roomInfo) return
      if (!roomInfo.done) {
        roomInfo.socket.error = true
        roomMap.delete(roomInfo.room_id)
        consoleLog("🚀 删除 ROOMID", roomInfo.room_id, task.display_id)
        ipcRenderer.invoke('remove-queue-feed-live-list', [roomInfo.display_id])
      }
    }, taskInterval)
  }
}

function loopSocketRoomInfo() {
  setTimeout(createSockets, taskInterval)
  setInterval(addSocketTask, taskInterval)
}

async function fetchFeed(type: string, channel_id: string) {
  // 1111006  42 86 87
  let region = await ipcRenderer.invoke('get-db-region')
  if (!region) return

  const queryParams = {
    aid: "1988",
    app_language: "zh-Hans",
    app_name: "tiktok_web",
    browser_language: "zh-CN",
    browser_name: "Mozilla",
    browser_online: "true",
    browser_platform: "MacIntel",
    browser_version: encodeURIComponent(navigator.appVersion),
    channel: "tiktok_web",
    channel_id: channel_id,
    cookie_enabled: "true",
    data_collection_enabled: "false",
    // device_id: `74952${generateRandomNumbers(14)}`,
    device_platform: "web_pc",
    device_type: "web_h264",
    focus_state: "true",
    from_page: "",
    history_len: "1",
    is_fullscreen: "false",
    is_non_personalized: "0",
    is_page_visible: "true",
    max_time: "0",
    os: "mac",
    priority_region: region,
    referer: "",
    region: region,
    req_from: type,
    screen_height: "1200",
    screen_width: "1800",
    tz_name: "Asia/Shanghai",
    user_is_login: "true",
    webcast_language: "zh-Hans",
  };
  const urls = new URL('https://webcast.tiktok.com/webcast/feed/')
  for (const key in queryParams) {
    urls.searchParams.append(key, queryParams[key])
  }
  return window
    .fetch(urls.href, {
      "credentials": "include",
      "method": "GET"
    })
    .then(res => res.json())
}

function parseFeedData(res, fromType = '推荐') {
  const saveList = parseTiktokFeed(res, fromType)
  ipcRenderer.invoke('save-queue-feed-live-list', saveList)
}

function loopFetchFeeds() {
  setInterval(async () => {
    const canMoreLoad = await ipcRenderer.invoke('can-load-more-feed')
    if (!canMoreLoad) return
    fetchFeed('pc_web_side_follow_default', '42').then((res) => parseFeedData(res, '广场'))
    // await sleep(3000)
    // fetchFeed('pc_web_suggested_host', '86').then((res) => parseFeedData(res, '推荐'))
  }, 15000)
  setInterval(async () => {
    const canMoreLoad = await ipcRenderer.invoke('can-load-more-feed')
    if (!canMoreLoad) return
    fetchFeed('live_mt_pc_web_rec_tab_loadmore', '87').then((res) => parseFeedData(res, '热门'))
  }, 5000)
}

hookFetch()
hookXMLHttpRequest()

if (location.href.includes('about:blank')) {
  document.write('<div> <h1> 载入中... </h1>  </div>')
  setTimeout(() => {
    location.href = 'https://www.tiktok.com/live'
  }, 1500)
}

async function main() {
  if (!inToktokLivePage()) return
  await sleep(3000)
  if (!window['isLogined']()) {
    console.log('未登录')
    return
  }
  consoleLog('tiktok main runned')
  taskLivePage()
  loopSocketRoomInfo()
  loopFetchFeeds()

  setInterval(() => {
    location.reload()
  }, 30 * 60 * 60 * 1000)
}

