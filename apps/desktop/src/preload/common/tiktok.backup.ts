import { whenDocumentElementStart } from "@/utils/dom"
import { ipcRenderer } from "electron/renderer"

declare global {
  interface Window {
    __require__: any
    __LOADABLE_LOADED_CHUNKS__: any
  }
}
async function getNextCoinTask() {
  const nextTask = await ipcRenderer.invoke('get-next-live-room')
  console.log("🚀 ~ a ~ nextTask:", nextTask)
}

function getWebpackChunk() {
  // window['__LOADABLE_LOADED_CHUNKS__'] ||
  return window['webpackChunk_tiktok_webapp_live']
}

function inToktokPage() {
  return location.href.includes('tiktok.com')
}

function isTiktokLivePage() {
  return location.href.includes('tiktok.com/live')
}


async function fetchHotNextLives() {
  return window.__require__(937345).h.get("/webcast/feed/", {
    "query": {
      "device_type": "web_h265",
      "req_from": "live_mt_pc_web_rec_tab_loadmore",
      "channel_id": 87,
      "related_live_tag": "",
      "max_time": Date.now(),
      "is_non_personalized": 0
    },
    "baseUrlType": 4
  })
}
function saveData(res) {
  const liveList: any[] = res.data
  const saveList = liveList
    .map(el => {
      return el.data
    })
    .map((el) => {
      return {
        roomId: el.id,
        nickname: el.owner.nickname,
      }
    })
  // console.log("🚀 ~ saveData ~ data:", saveList)
  ipcRenderer.invoke('save-queue-live-list', saveList)
}


whenDocumentElementStart(() => {
  return [
    window['__PNS_RUNTIME__'],
  ]
}, 12000).then(init)

function getBrowserEnvConfig() {
  const config: Record<any, any> = {}
  const __PNS_RUNTIME__ = window['__PNS_RUNTIME__']
  if (!__PNS_RUNTIME__) {
    return {}
  }
  const canCrawl = isTiktokLivePage()
  const region = __PNS_RUNTIME__?.['pageContext']?.['region'] || ''
  config.region = region.replace('-ttp', '').toUpperCase()
  config.canCrawl = canCrawl
  return config
}

async function init() {
  return
  if (!inToktokPage()) return
  console.log('进入 Tiktok 界面')

  hookRequire()
  // loopFetchLiveInfo()

  const config = getBrowserEnvConfig()
  ipcRenderer.invoke('update-app-config', config)
}


function loopFetchLiveInfo() {
  whenDocumentElementStart(() => [window.__require__], 16000).then(() => {
    fetchHotNextLives().then(saveData)
    setInterval(() => {
      fetchHotNextLives().then(saveData)
    }, 20000)
  })
}

function hookRequire() {
  const CHUNKS = getWebpackChunk()
  if (!CHUNKS) return
  const oldPush = CHUNKS.push
  CHUNKS.push = function (...args) {
    const [_, modules = {}] = args?.[0] || []
    for (const moduleNum in modules) {
      if (window.__require__) break
      const func = modules[moduleNum]
      modules[moduleNum] = function (...args) {
        if (!args[2]?.nmd) return
        window.__require__ = args[2]
        // console.log(moduleNum, args)
        return func.apply(this, args)
      }
      break
    }
    return oldPush.apply(this, args)
  }
  console.log('hookRequire 成功')
}
