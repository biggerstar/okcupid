import { SERVER_API } from '@/config';
import { contextBridge, ipcRenderer } from 'electron/renderer';
import { useTitlebar } from "../common/titlebar";

console.log('main preload 加载成功');

useTitlebar({
  color: '#FFFFFF',
  resetPosition: true,
  overflowHidden: true,
  titleSuffix: {
    suffix: ` TK公会商业合作邀约`,
    showVersion: true,
    separator: ' - ',
  }
})

async function updateAppConfig(config) {
  return ipcRenderer.invoke('update-app-config', config)
}

async function getAppConfig(): Promise<Record<any, any>> {
  const currentConfigList = await ipcRenderer.invoke('get-app-config')
  const configMap = {}
  currentConfigList.forEach(el => {
    configMap[el.key] = el.value
  });
  return configMap
}

const __API__ = {
  login(form) {
    return ipcRenderer.invoke('app-login', form)
  },
  startTask() {
    ipcRenderer.invoke('startTask')
  },
  stopTask() {
    ipcRenderer.invoke('stopTask')
  },
  openTikTokWindow() {
    ipcRenderer.invoke('openTikTokWindow')
  },
  hideTikTokWindow() {
    ipcRenderer.invoke('hideTikTokWindow')
  },
  openTiktokBackstageWindow() {
    ipcRenderer.invoke('openTiktokBackstageWindow')
  },
  hideTiktokBackstageWindow() {
    ipcRenderer.invoke('hideTiktokBackstageWindow')
  },
  resetCheckCounter() {
    return ipcRenderer.invoke('reset-check-counter')
  },
  async getCurrentStat() {
    return ipcRenderer.invoke('get-current-stat')
  },
  async getAppConfig() {
    return getAppConfig()
  },
  async updateAppConfig(config) {
    return updateAppConfig(config)
  },
  async getMinutelyCounts() {
    return ipcRenderer.invoke('get-minutely-counts-info')
  },
  async getDayCountsInfo() {
    return ipcRenderer.invoke('get-day-counts-info')
  },
  async getCheckedCountInfo() {
    return ipcRenderer.invoke('get-checked-counts-info')
  },
  async getTiktokWindowRunningStatus() {
    return ipcRenderer.invoke('get-tiktok-window-running-status')
  },
  async setTiktokWindowRunningStatus(isRun: boolean) {
    return ipcRenderer.invoke('set-tiktok-window-running-status', isRun)
  },
  async getTiktokBackstageWindowRunningStatus() {
    return ipcRenderer.invoke('get-tiktok-backstage-window-running-status')
  },
  async taskRunningStatus(){
    return ipcRenderer.invoke('get-task-running-status') 
  },
  async getTiktokWindowShowStatus() {
    return ipcRenderer.invoke('get-tiktok-window-show-status')
  },
  async getTiktokBackstageWindowShowStatus() {
    return ipcRenderer.invoke('get-tiktok-backstage-window-show-status')
  },
  async isLogined() {
    const config = await getAppConfig()
    if (!config.token || !config.userId) return false
    return true
  }
}

const __TABLE_API__ = {
  async getAnchorList(options) {
    return ipcRenderer.invoke('get-anchor-list', options)
  },
  async getBossList(options) {
    return ipcRenderer.invoke('get-boss-list', options)
  },
  async deleteAnchorList(options) {
    return ipcRenderer.invoke('delete-anchor-list', options)
  },
  async deleteBossList(options) {
    return ipcRenderer.invoke('delete-boss-list', options)
  },
}
contextBridge.exposeInMainWorld("__API__", __API__)
contextBridge.exposeInMainWorld('__TABLE_API__', __TABLE_API__)
contextBridge.exposeInMainWorld('_SERVER_API_', SERVER_API)


async function getIpRegion() {
  return fetch("https://ip.011102.xyz/", {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result['IP']['Country'])
    .catch(error => console.log('error', error));
}

getIpRegion().then(res => {
  console.log("🚀 ~ getIpRegion ~ res:", res)
  if (!res) return
  updateAppConfig({
    region: res
  })
})

// 轮询运行状态，如果出现采集断层则重启 TK 窗口
async function tryCheckRestart() {
  const isRunning = await __API__.getTiktokWindowRunningStatus()
  if (!isRunning) return
  const minuteAgo = 10
  __API__.getMinutelyCounts().then(res => {
    const all: any[] = res.all
    const recently10Minute = all.slice(all.length - 1 - minuteAgo, all.length - 1)
    const isRestart = recently10Minute.every(item => item.count === 0)
    if (isRestart) {
      console.log("出现断层，进行重启 TK", isRestart)
      __API__.setTiktokWindowRunningStatus(false)
      setTimeout(() => __API__.setTiktokWindowRunningStatus(true), 1000)
    }
  })
}

tryCheckRestart()
setInterval(tryCheckRestart, 5 * 60 * 1000)  // 每5分钟检查是否需要重启 TK 任务
setInterval(() => location.reload(), 3 * 60 * 60 * 1000)  // 每三小时刷新一次主程序页面

