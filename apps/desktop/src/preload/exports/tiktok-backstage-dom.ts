import { whenDocumentElementStart } from "@/utils/dom"
import { sleep } from "@/utils/time"
import { ipcRenderer } from "electron"
import { checkErrorPage } from "../common/check-error-page"

const overviewUrl = 'https://live-backstage.tiktok.com/portal/overview'
console.log('backstage-dom')

checkErrorPage(overviewUrl, setTimeout)

const oldParse = JSON.parse
JSON.parse = function (...args) {
  const json = oldParse.apply(this, args)
  const AnchorList = json?.data?.AnchorList
  if (Array.isArray(AnchorList)) {
    parseAnthorData(AnchorList)
  }
  return json
}


// const oldFetch = window.fetch
// window.fetch = async function (req, init) {
//   const response: Response = await oldFetch.apply(this, [req, init])
//   return response
// }

// const originalXHROpen = XMLHttpRequest.prototype.open;
// XMLHttpRequest.prototype.open = function(method, url) {
//   this._url = url;
//   return originalXHROpen.apply(this, arguments);
// };

// const originalXHRSend = XMLHttpRequest.prototype.send;
// XMLHttpRequest.prototype.send = function(body) {
//   if (this._url.includes('batch_check_anchor')) {
//     // 可以修改请求或返回Mock数据
//     this.addEventListener('load', function() {
//       try{
//         window['____resJson'] = this.responseText
//       }
//       catch(e){
//       }
//     });
//   }
//   return originalXHRSend.apply(this, arguments);
// };

let currentCheckStatus = null
function updateCanCheckStatus(status: boolean) {
  if (currentCheckStatus === status) return
  currentCheckStatus = status
  ipcRenderer.invoke('update-app-config', { checkStatus: !!status })
  console.log("更新可查验状态为: ", status)
}

setInterval(() => {
  const isExistCap = document.querySelector('#captcha-verify-container-main-page')
  if (isExistCap) {
    updateCanCheckStatus(false)
    // if (isExistCap.querySelector('path[fill="#0BE09B"]')) {
    //   // 验证码验证通过
    //   location.reload()
    // }
  } else if (!currentCheckStatus) {
    updateCanCheckStatus(true)
  }
}, 2000)

function isInInvitePage() {
  return location.href.startsWith(overviewUrl)
}

async function getAppConfig() {
  return ipcRenderer.invoke('get-app-config')
}

function closeModal(delay: number = 0) {
  setTimeout(() => {
    const closeBtn = document.querySelector<HTMLElement>('.semi-sidesheet-header button')
    if (closeBtn) {
      closeBtn.click()
      const isReload = Math.round(Math.random() * 5) === 3
      if (isReload) {
        setTimeout(() => {
          location.reload()
        }, 8000)
      }
    }
  }, delay)
}

function clickBackBtn() {
  document.querySelector<HTMLElement>('button[data-id="invite-host-back"]')?.click()
}

function findElementReactFiberKey(el: HTMLElement) {
  return Object.keys(el).find(key => key.startsWith('__reactFiber$'))
}

function findElementReactPropsKey(el: HTMLElement) {
  return Object.keys(el).find(key => key.startsWith('__reactProps$'))
}

async function getNextTiktokBackstageAnthorList(): Promise<string[]> {
  const anthorList = await ipcRenderer.invoke('get-next-tiktok-backstage-anthor-list')
  const anthorDisplayIds = anthorList.map(anthor => anthor.display_id)
  if (anthorDisplayIds.length < 30) return []
  return anthorDisplayIds
}

/*
  DisplayReason
  2  加入其他公会

  AnchorStatus 
  2  地区不匹配
  10 其他原因

  AnchorStatus 和 DisplayReason 都为 0 可邀请
*/
function parseAnthorData(aAnchorList: Array<any> = []) {
  const saveList = aAnchorList.map(item => {
    let check_result = null
    const { AnchorStatus, DisplayReason, UserBaseInfo, CanUseInvitationType = [] } = item
    const is_god_invite = CanUseInvitationType[0] === 4
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
      check_result,
      is_god_invite
    }
  })
  ipcRenderer.invoke('update-anthor-info', saveList)
  return saveList
}

function getEvent(currentTarget: Element, type: string, onType: string) {
  const fakeEvent: any = {
    bubbles: true,
    cancelable: false,
    currentTarget,
    defaultPrevented: false,
    detail: 0,
    eventPhase: 3,
    isDefaultPrevented: () => false,
    isPropagationStopped: () => false,
    isTrusted: true,
    relatedTarget: null,
    target: currentTarget,
    timeStamp: 8000 + Math.random() * 20000,
    type,
    view: window,
    _reactName: onType,
    _targetInst: null
  }
  fakeEvent.nativeEvent = fakeEvent
  return fakeEvent
}

async function syncAnthorData() {
  const isExistCap = document.querySelector('#captcha-verify-container-main-page') // 是否存在验证码，存在则不操作
  if (isExistCap) return

  const anchorIds = await getNextTiktokBackstageAnthorList()
  if (!anchorIds.length) return

  const semiTab1El = document.querySelector<HTMLElement>('#semiTab1')
  if (!semiTab1El) {
    updateCanCheckStatus(false)
    return
  }
  semiTab1El.click()
  await sleep(3000)
  const inviteButton = document.querySelector<HTMLButtonElement>('button[data-id="agent-workplace-add-host"]')
  if (!inviteButton) {
    updateCanCheckStatus(false)
    return
  }
  inviteButton.click()
  await sleep(3000)

  const inviteHostTextAreaEl = document.querySelector<HTMLTextAreaElement>('textarea[data-testid="inviteHostTextArea"]')
  if (!inviteHostTextAreaEl) {
    updateCanCheckStatus(false)
    return
  }
  inviteHostTextAreaEl.click()
  await sleep(1000)
  const nextButton = document.querySelector<HTMLElement>('button[data-id="invite-host-next"]')
  if (!nextButton) return
  const idString = anchorIds.join('\n')
  const reactFiberKey = findElementReactFiberKey(inviteHostTextAreaEl)
  const reactPropsKey = findElementReactPropsKey(inviteHostTextAreaEl)
  const textAreaFiberObject = inviteHostTextAreaEl[reactFiberKey]
  const textAreaPropsObject = inviteHostTextAreaEl[reactPropsKey]
  inviteHostTextAreaEl.focus()
  textAreaPropsObject.onFocus(getEvent(inviteHostTextAreaEl, 'focus', 'onFocus'))
  await sleep(500)
  inviteHostTextAreaEl['_valueTracker'].setValue(idString)
  inviteHostTextAreaEl.value = idString
  textAreaPropsObject.value = idString
  textAreaFiberObject.alternate.memoizedProps.value = idString
  textAreaFiberObject.alternate.pendingProps.value = idString
  textAreaPropsObject.onKeyDown(getEvent(inviteHostTextAreaEl, 'keyDown', 'onKeyDown'))
  textAreaPropsObject.onChange(getEvent(inviteHostTextAreaEl, 'change', 'onChange'))
  inviteHostTextAreaEl.blur()
  textAreaPropsObject.onBlur(getEvent(inviteHostTextAreaEl, 'blur', 'onBlur'))
  await sleep(200)
  nextButton.click()
  await sleep(5000)
  clickBackBtn()
  // closeModal()
}

function createHookCss() {
  const styleEl = document.createElement('style')
  styleEl.textContent = `
    .semi-portal {
      z-index: -1000 !important;
      filter: blur(1px)
    }
  `
  document.head.appendChild(styleEl)
}

if (isInInvitePage()) {
  whenDocumentElementStart(() => [
    !!document.querySelector('#semiTab1')
  ], 16000)
    .then(() => {
      getAppConfig()
        .then((res) => {
          createHookCss()
          updateCanCheckStatus(true)
          const guildCheckIntervalItem = res.find(i => i.key === 'guildCheckInterval')
          const guildCheckInterval = (guildCheckIntervalItem?.value || 180) * 1000
          // syncAnthorData()
          // setTimeout(syncAnthorData, 10000)
          setInterval(syncAnthorData, guildCheckInterval)
        })
    })
    .catch(() => {
      updateCanCheckStatus(false)
    })
}

