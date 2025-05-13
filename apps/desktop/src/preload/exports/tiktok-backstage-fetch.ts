import { whenDocumentElementStart } from "@/utils/dom"
import { ipcRenderer } from "electron"
import { checkErrorPage } from "../common/check-error-page"

// https://live-backstage.tiktok.com/
console.log('backstage fetch')

checkErrorPage('https://live-backstage.tiktok.com', setTimeout)

function isInInvitePage() {
  return location.href.includes('https://live-backstage.tiktok.com/portal/overview')
}

let currentCheckStatus = null

function updateCanCheckStatus(status: boolean) {
  if (currentCheckStatus === status) return
  currentCheckStatus = status
  ipcRenderer.invoke('update-app-config', { checkStatus: !!status })
  console.log("🚀 更新可查验状态为: ", status)
}

async function fetchAnthorInfo(displayIdList: string[]) {
  const url = "/creators/live/union_platform_api/agency/union_invite/batch_check_anchor/"
  const config = {
    "method": "post",
    "headers": {
      "x-appid": "1180",
      "x-language": "zh-Hans",
      "content-type": "application/json",
      "faction-id": "112307"
    },
    "body": JSON.stringify({
      "DisplayIDList": displayIdList
    })
  }
  return await fetch(url, config).then(response => response.json())
}
async function getNextTiktokBackstageAnthorList() {
  return ipcRenderer.invoke('get-next-tiktok-backstage-anthor-list')
}
async function getAppConfig() {
  return ipcRenderer.invoke('get-app-config')
}

/*
  DisplayReason
  2  加入其他公会

  AnchorStatus 
  2  地区不匹配
  10 其他原因

  AnchorStatus 和 DisplayReason 都为 0 可邀请
*/
function parseAnthorData(data) {
  const aAnchorList = data?.data?.AnchorList
  const status_code = data?.status_code
  if (status_code !== 0) { // 验证码
    window['verifySDK'].renderCaptcha(window['verifyOptions'])
    return
  }
  if (!aAnchorList) return
  console.log("🚀 成功查询返回:", aAnchorList)
  const saveList = aAnchorList.map(item => {
    let check_result = null
    const { AnchorStatus, DisplayReason, UserBaseInfo } = item
    if (AnchorStatus === 0 && DisplayReason === 0) {
      check_result = '符合条件: 可邀请'
    }
    else if (DisplayReason == 2) {
      check_result = '不符合条件: 已加入其他公会'
    }
    else {
      check_result = '不符合条件: 其他原因'
    }
    return {
      display_id: UserBaseInfo.DisplayID,
      check_result
    }
  })
  ipcRenderer.invoke('update-anthor-info', saveList)
  console.log("🚀 ~ parseAnthorData ~ saveList:", saveList)
  setTimeout(()=>{
    location.reload()
  }, 8000)
  return saveList
}

setInterval(() => {
  const isExistCap = document.querySelector('#captcha-verify-container-main-page')
  if (isExistCap) {
    updateCanCheckStatus(false)
    if (isExistCap.querySelector('path[fill="#0BE09B"]')) {
      // 验证码验证通过
      location.reload()
    }
  } else if (!currentCheckStatus) {
    updateCanCheckStatus(true)
  }
}, 2000)

async function syncAnthorData() {
  const isExistCap = document.querySelector('#captcha-verify-container-main-page') // 是否存在验证码，存在则不操作
  if (isExistCap) {
    return
  }

  const canCheckAnchor = await ipcRenderer.invoke('can-check-anchor')
  if (!canCheckAnchor) {
    return
  }
  updateCanCheckStatus(true)

  const anthorList = await getNextTiktokBackstageAnthorList()
  console.log("🚀 ~ syncAnthorData ~ anthorList:", anthorList.length)
  const anthorDisplayIds = anthorList.map(anthor => anthor.display_id)
  if (anthorDisplayIds.length < 30) return
  fetchAnthorInfo(anthorDisplayIds).then(parseAnthorData)
  // console.log("🚀 ~ syncAnthorData ~ anthorDisplayIds:", anthorDisplayIds.join('\n'))
}

function syncRegion() {
  whenDocumentElementStart(() => [!!window['GLOBAL_DATA']?.['country']], 8000)
    .then(() => {
      const region = window['GLOBAL_DATA']['country']
      console.log("🚀 ~ syncRegion ~ region:", region)
      if (region) {
        ipcRenderer.invoke('update-app-config', { checkArea: region })
        updateCanCheckStatus(true)
      }
    })
    .catch(() => {
      ipcRenderer.invoke('update-app-config', { checkArea: '' })
      updateCanCheckStatus(false)
    })
}

if (isInInvitePage()) {
  getAppConfig()
    .then(async (res) => {
      // const canCheckAnchor = await ipcRenderer.invoke('can-check-anchor')
      // console.log("🚀 ~ .then ~ canCheckAnchor:", canCheckAnchor)
      syncRegion()
      const guildCheckIntervalItem = res.find(i => i.key === 'guildCheckInterval')
      const guildCheckInterval = (guildCheckIntervalItem?.value || 300) * 1000
      // setTimeout(syncAnthorData, 10000)
      setInterval(syncAnthorData, guildCheckInterval)
    })
}

