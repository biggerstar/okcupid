import { whenDocumentElementStart } from "@/utils/dom";
import { sleep } from "@/utils/time";
import { ipcRenderer } from "electron";
import { capchaSolve } from "../common/capcha";
import { checkErrorPage } from "../common/check-error-page";
import { useReload } from "../common/use-reload";

var selectorAddHostButton = '[data-id="add-host-btn"]';
var selectorHostInput = '[data-testid="inviteHostTextArea"]';
var selectorSubmitButton = '[data-id="invite-host-next"]';
var selectorBackButton = '[data-id="invite-host-back"]';
var selectorCaptchaImg = '.captcha_verify_container';
var selectorCaptchaImg2 = '.captcha-verify-container';
var selectorDragIcon = 'div.secsdk-captcha-drag-icon';//旧版滑块 64.05x40
var selectorDragIcon2 = 'div[draggable="true"]'; //新版滑块 64x40
var selectorDragSlide = 'div.captcha_verify_slide--slidebar'; //旧版滑槽 340x44
var selectorDragSlide2 = 'div.cap-bg-UISheetGrouped3'; //新版滑槽 348x40

var captchaDragIcon;
var dragSlide;
var v1;
var dragStartEvent = new DragEvent('dragstart', {
  bubbles: true,
  cancelable: true,
  dataTransfer: new DataTransfer()
});

/**
 * See [Modify React Component's State using jQuery/Plain Javascript from Chrome Extension](https://stackoverflow.com/q/41166005)
 * See https://github.com/facebook/react/issues/11488#issuecomment-347775628
 * See [How to programmatically fill input elements built with React?](https://stackoverflow.com/q/40894637)
 * See https://github.com/facebook/react/issues/10135#issuecomment-401496776
 *
 * @param {HTMLInputElement} input
 * @param {string} value
 */
function setReactInputValue(input, value) {
  if (input.value === value) return
  const previousValue = input.value;
  // eslint-disable-next-line no-param-reassign
  input.value = value;
  const tracker = input._valueTracker;
  if (tracker) {
    tracker.setValue(previousValue);
  }

  // 'change' instead of 'input', see https://github.com/facebook/react/issues/11488#issuecomment-381590324
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

function addHost() {
  var button = querySelector<HTMLElement>(selectorAddHostButton);
  button.click()
}

function fillHost(hosts) {
  var hostTextArea = querySelector(selectorHostInput);
  hostTextArea && setReactInputValue(hostTextArea, hosts)
}

function submitHost() {
  var button = document.querySelector<HTMLElement>(selectorSubmitButton);
  button && button.click()
}

async function clickBack() {
  const button = querySelector<HTMLElement>(selectorBackButton);
  button && button.click()
}
function notifyAssist(name, data, hasAddNode, hasFillNode, hasSubmitNode, hasBackNode) {
  consoleLog('notifyAssist:', name, data);
}

function getDivBoundingClientRect(selector) {
  var rect = querySelector(selector).getBoundingClientRect();
  return JSON.stringify(rect);
}

function onDragSource(event) {
  //consoleLog('got:', event.type, event.target, event);
};

function onDragTarget(event) {
  //consoleLog('target got:', event.type, event);
};

function onMouseEvent(event) {
  //consoleLog('got:', event.type, event.target, event);
};

function queryDragElements() {
  captchaDragIcon = querySelector(selectorDragIcon2);
  v1 = false;
  if (captchaDragIcon == null) {
    captchaDragIcon = querySelector(selectorDragIcon);
    v1 = true;
  }

  dragSlide = querySelector(selectorDragSlide2);
  if (dragSlide == null) {
    dragSlide = querySelector(selectorDragSlide);
  }
}

function hookDrag() {
  queryDragElements();
  if (captchaDragIcon != null) {
    captchaDragIcon.addEventListener("dragstart", onDragSource);
    captchaDragIcon.addEventListener("drag", onDragSource);
    captchaDragIcon.addEventListener("dragend", onDragSource);

    captchaDragIcon.addEventListener("dragenter", onDragSource);
    captchaDragIcon.addEventListener("dragleave", onDragSource);
    captchaDragIcon.addEventListener("dragover", onDragSource);
    captchaDragIcon.addEventListener("drop", onDragSource);

    captchaDragIcon.addEventListener("mousedown", onMouseEvent);
    captchaDragIcon.addEventListener("mousemove", onMouseEvent);
    captchaDragIcon.addEventListener("mouseup", onMouseEvent);
  }
}

function pressDragIcon() {
  queryDragElements();
  if (captchaDragIcon != null) {
    let rect = captchaDragIcon.getBoundingClientRect();
    let x = (rect.left + rect.right) / 2;
    let y = (rect.top + rect.bottom) / 2;
    if (v1) {
      captchaDragIcon.dispatchEvent(new MouseEvent('mousedown', { view: window, bubbles: true, cancelable: true, clientX: x, clientY: y }));
    } else {
      dragStartEvent = new DragEvent('dragstart', {
        bubbles: true,
        cancelable: true,
        clientX: x, clientY: y,
        dataTransfer: new DataTransfer()
      });
      captchaDragIcon.dispatchEvent(dragStartEvent);
    }
    //consoleLog('pressDragIcon', v1, captchaDragIcon);
  }
}

function moveDragIcon(xStr, yStr) {
  queryDragElements();
  if (captchaDragIcon != null) {
    var x = parseFloat(xStr);
    var y = parseFloat(yStr);
    if (v1) {
      var mouseEvent = new MouseEvent('mousemove', { view: window, bubbles: true, cancelable: true, clientX: x, clientY: y })
      captchaDragIcon.dispatchEvent(mouseEvent);
    } else {
      const dragEvent = new DragEvent('drag', {
        bubbles: true,
        cancelable: true,
        clientX: x, clientY: y,
        dataTransfer: dragStartEvent.dataTransfer
      });
      captchaDragIcon.dispatchEvent(dragEvent);

      if (dragSlide != null) {
        const dragEvent = new DragEvent('dragover', {
          bubbles: true,
          cancelable: true,
          dataTransfer: dragStartEvent.dataTransfer
        });
        dragSlide.dispatchEvent(dragEvent);
      }
    }

    //consoleLog('moveDragIcon', v1, xStr, yStr, captchaDragIcon);
  }
}

function releaseDragIcon(xStr, yStr) {
  queryDragElements();
  var x = parseFloat(xStr);
  var y = parseFloat(yStr);
  if (captchaDragIcon != null) {
    if (v1) {
      captchaDragIcon.dispatchEvent(new MouseEvent('mouseup', { view: window, bubbles: true, cancelable: true, clientX: x, clientY: y }));
    } else {
      const dragEndEvent = new DragEvent('dragend', {
        bubbles: true,
        cancelable: true,
        clientX: x, clientY: y,
        dataTransfer: dragStartEvent.dataTransfer
      });
      captchaDragIcon.dispatchEvent(dragEndEvent);
    }

    //consoleLog('releaseDragIcon', v1, captchaDragIcon);
  }
}

/* --------------------------------------------------------------------------------------- */

useReload()

window['fillHost'] = fillHost
window['submitHost'] = submitHost

const takePage = 'about:blank'
const overviewUrl = 'https://live-backstage.tiktok.com/portal/overview'
console.log('backstage', location.href)
checkErrorPage(overviewUrl, setTimeout)

console.error = function (...args) {
  console.info(...args)
}
const consoleLog = console.log.bind(console)

const oldParse = JSON.parse
JSON.parse = function (...args) {
  const json = oldParse.apply(this, args)
  const AnchorList = json?.data?.AnchorList
  if (Array.isArray(AnchorList)) {
    parseAnthorData(AnchorList)
    json.data.AnchorList = AnchorList
  }
  return json
}

const oldFetch = window.fetch
window.fetch = async function (input, init = {}) {
  init.credentials = 'include'
  return oldFetch.apply(this, [input, init])
}

const oldXhrSend = XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send = function (body) {
  this.withCredentials = true
  return oldXhrSend.apply(this, [body])
}

const addEventListener = EventTarget.prototype.addEventListener
const banEventList = ['pagehide', 'pageshow', 'unload', 'beforeunload', 'visibilitychange']
EventTarget.prototype.addEventListener = function (...args) {
  const eventName = args[0]
  const foundEvent = banEventList.find(name => name === eventName)
  if (foundEvent) {
    return
  }
  return addEventListener.apply(this, args)
}


async function updateCanCheckStatus(status: boolean) {
  const config = await getAppConfig()
  const checkStatus = config.checkStatus === '1'
  if (checkStatus === status) return
  ipcRenderer.invoke('update-app-config', { checkStatus: !!status })
  consoleLog("更新可查验状态为: ", status)
}

function isInInvitePage() {
  return location.href.startsWith(overviewUrl)
}

function inTakePage() {
  return location.href === takePage
}

async function getAppConfigGuildCheckInterval() {
  const config = await getAppConfig()
  const guildCheckInterval = (config.guildCheckInterval || 60) * 1000
  return guildCheckInterval
}

function querySelector<T extends HTMLElement>(selector: string): T | null {
  return document.querySelectorAll<T>(selector)?.[0] || null
}

async function getNextTiktokBackstageAnthorList(): Promise<string[]> {
  const anthorList = await ipcRenderer.invoke('get-next-tiktok-backstage-anthor-list')
  const anthorDisplayIds = anthorList.map(anthor => anthor.display_id)
  if (anthorDisplayIds.length < 30) return []
  return anthorDisplayIds
}
async function clickAddInviteBtn() {
  const nextButton = querySelector(selectorSubmitButton);
  if (nextButton) return
  const semiTab1El = querySelector('#semiTab1')
  if (!semiTab1El) {
    updateCanCheckStatus(false)
    return
  }
  semiTab1El.click()
  await sleep(3000)
  const inviteButton = querySelector<HTMLButtonElement>('button[data-id="agent-workplace-add-host"]')
  if (!inviteButton) {
    updateCanCheckStatus(false)
    return
  }
  inviteButton.click()
  await sleep(3000)
}

async function getAppConfig(): Promise<Record<any, any>> {
  const currentConfigList = await ipcRenderer.invoke('get-app-config')
  const configMap = {}
  currentConfigList.forEach(el => {
    configMap[el.key] = el.value
  });
  return configMap
}

function hasCaptcha() {
  // 是否存在验证码，存在则不操作
  const hasCaptcha = !!querySelector('#captcha-verify-container-main-page') ||
    !!querySelector('#captcha_container')?.childNodes?.length ||
    !!querySelector('.captcha_verify_container')
  consoleLog("🚀 ~ hasCaptcha ~ hasCaptcha:", hasCaptcha)
  return hasCaptcha
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
  if (saveList.length) {
    validateSuccess = true
  }
  ipcRenderer.invoke('update-anthor-info', saveList)
  return saveList
}
let validateSuccess = false
let lastSyncTime = Date.now()
async function syncAnthorData() {
  console.log("进行查验")
  if ((Date.now() - lastSyncTime) >= 8 * 60 * 1000) { // 超过5分钟没同步则刷新
  }
  if (hasCaptcha()) return
  const config = await getAppConfig()
  if (config.autoCheck !== '1') return
  const anchorIds = await getNextTiktokBackstageAnthorList()
  console.log("syncAnthorData ~ anchorIds:", anchorIds)
  if (!anchorIds.length) return
  const idString = anchorIds.join('\n')

  await clickAddInviteBtn()

  fillHost(idString)
  submitHost()
  lastSyncTime = Date.now()
}

function syncRegion() {
  whenDocumentElementStart(() => [!!window['GLOBAL_DATA']?.['country']], 8000)
    .then(() => {
      const region = window['GLOBAL_DATA']['country']
      // consoleLog("🚀 ~ syncRegion ~ region:", region)
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

function createHookCss() {
  const styleEl = document.createElement('style')
  styleEl.textContent = `
    .semi-portal:has([data-id="invite-host"]){
      z-index: -1000 !important;
      filter: blur(1px)
    }
  `
  document.head.appendChild(styleEl)
}

let capchaSolving = false
setInterval(async () => {
  if (hasCaptcha()) {
    updateCanCheckStatus(false)
    if (capchaSolving) return
    capchaSolving = true
    capchaSolve().finally(() => setTimeout(() => capchaSolving = false, 10000))
  } else if (isInInvitePage() || inTakePage()) {
    const canCheck = await ipcRenderer.invoke('can-check-anchor')
    updateCanCheckStatus(canCheck)
    clickBack()
      .then(async () => {
        await sleep(3000)
        fillHost('')
      })
  }
  // if (validateSuccess) {
  //   setTimeout(() => {
  //     location.href = takePage
  //   }, 6000)
  // }
}, 2000)

if (isInInvitePage()) {
  whenDocumentElementStart(() => [
    !!querySelector('#semiTab1')
  ], 30000)
    .then(() => {
      getAppConfigGuildCheckInterval()
        .then(async (guildCheckInterval) => {
          await sleep(3000)
          // createHookCss()
          syncRegion()
          updateCanCheckStatus(true)
          // syncAnthorData()
          setInterval(syncAnthorData, guildCheckInterval)
        })
    })
    .catch(() => {
      setInterval(() => {
        location.reload()
      }, 20000)
    })
}
else if (inTakePage()) {
  document.write('<div> <h1> 载入中... </h1>  </div>')
  setTimeout(() => {
    location.href = overviewUrl
  }, 1000)

  // document.write('<div> <h1> 页面已被接管 </h1> <h3 id="log"></h3>  <h3 id="time"></h3>  </div>')
  // getAppConfigGuildCheckInterval().then((guildCheckInterval) => {
  //   let loopCount = 0
  //   let interval = Math.floor(guildCheckInterval / 1000)
  //   let timeCount = interval
  //   const offset = timeCount * 0.3  // 计时偏移
  //   const addition = Math.round(-offset * Math.random() + Math.random() * offset)  // 随机增减秒数
  //   timeCount = timeCount + addition
  //   const timeEl = document.querySelector('#time')
  //   const logEl = document.querySelector('#time')
  //   setInterval(async () => {
  //     timeCount--
  //     if (timeCount <= 0) timeCount = 0
  //     timeEl.innerHTML = `还有 ${timeCount} 秒进行查验`
  //     if (timeCount <= 0) {
  //       const anchorIds = await getNextTiktokBackstageAnthorList()
  //       if (!anchorIds.length) {
  //         logEl.innerHTML = `无新的查验 ID, 等待下一个周期 (${++loopCount})`
  //         timeCount = interval
  //         return
  //       }
  //       location.href = overviewUrl
  //     }
  //   }, 1000)
  // })
}
else {
  updateCanCheckStatus(false)
}
