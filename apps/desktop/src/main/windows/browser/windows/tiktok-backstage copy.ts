import { globalEnv } from "@/global/global-env";
import { globalMainPathParser } from "@/global/global-main-path-parser";
import { registerSchemesFingerprintBySession } from "@/main/interceptors";
import { preventDevtools } from "@/main/interceptors/devtools/prevent-devtools";
import { BrowserWindow } from 'electron';
import setCookieParser from "set-cookie-parser";
import { mainWindow } from "../../app/app";
import { updateAppConfig } from "../ipc/tiktok";

async function syncAppRegionConfig() {
  if (!tiktokBackstageWindowManager.win || !tiktokBackstageWindowManager.isRunnning()) {
    updateAppConfig({ checkArea: '', checkStatus: false })
    return
  }
  const url = await tiktokBackstageWindowManager.win?.webContents?.getURL()
  if (!url) return
  if (!url.startsWith('https://live-backstage.tiktok.com/')) {
    updateAppConfig({ checkArea: '', checkStatus: false })
    return
  }
}
setTimeout(syncAppRegionConfig, 1000)
setInterval(syncAppRegionConfig, 3000)

export class TiktokBackstageWindowManager {
  public win: BrowserWindow | null = null
  private _clearStorageTimer: any
  public homeUrl = 'https://live-backstage.tiktok.com/portal/overview'
  public async createWindow(isShow: boolean = true) {
    const url = this.homeUrl
    if (this.win && this.win.webContents && !this.win.webContents.isDestroyed()) {
      return
    }
    this.win = new BrowserWindow({
      closable: false,
      // parent: mainWindow.win,
      webPreferences: {
        // additionalArguments:[
        //   '---lang=zh-CN'
        // ],
        spellcheck: false,
        sandbox: false,
        nodeIntegration: false,
        contextIsolation: false,
        webSecurity: false,
        // preload: globalMainPathParser.resolvePreload('tiktok-backstage-fetch.mjs').toString(),
        preload: globalMainPathParser.resolvePreload('tiktok-backstage.mjs').toString(),
        partition: 'persist:tiktok-backstage-test1',
      },
    });

    console.log('已成功创建 公会 窗口!')
    this.win.webContents.setBackgroundThrottling(false)
    this.fllowResize(isShow)
    // this.hookRequest()
    // this._rewriteFetch()
    this.win.webContents.loadURL(url)
    this.win.webContents.setAudioMuted(true)
    mainWindow.win.addListener('resize', () => this.fllowResize(isShow))

    if (globalEnv.isDev) {
      // this.win.webContents.openDevTools()
    }

    this.win.webContents.setWindowOpenHandler(({ url }) => {
      this.win.webContents.loadURL(url)
      return {
        action: 'deny',
      }
    })

    this.win.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith('bytedance://')) {
        return { action: 'deny' }
      }
      return { action: 'allow' }
    })

    this.win.webContents.on('will-navigate', (event) => {
      if (event.url.startsWith('bytedance://')) {
        event.preventDefault()
      }
    })

    this.win.webContents.on('will-frame-navigate', (event) => {
      if (event.url.startsWith('bytedance://')) {
        event.preventDefault()
      }
    })

    this.win.webContents.on('will-attach-webview', (event) => {
      event.preventDefault()
    })

    mainWindow.win.addListener('close', () => {
      this.stopTask()
    })

    // other
    preventDevtools(this.win.webContents.session)
  }

  private _deleteHeaderValue(headers: Record<any, any> | Headers, headerName: string) {
    try {
      headers.delete(headerName.toLowerCase())
      headers.delete(headerName)
    } catch (e) {
      delete headers[headerName.toLowerCase()]
      delete headers[headerName]
    }
  }

  private _resetHeaderValue(headers: Record<any, any> | Headers, headerName: string, headerValue: any) {
    this._deleteHeaderValue(Headers, headerName)
    try {
      headers.set(headerName, headerValue.toString())
    } catch (e) {
      headers[headerName] = headerValue
    }
  }

  async setResponseCookies(response: Response) {
    for (const cookie of setCookieParser(response)) {
      delete cookie.sameSite
      await this.win.webContents.session.cookies.set({ ...cookie, url: response.url })
    }
  }

  async getUrlCookieString(url: string) {
    const cookies = await this.win.webContents.session.cookies.get({ url })
    return cookies.map(cookie => `${cookie.name}=${cookie.value}`).join(';')
  }

  private _allowCSP(headers: Headers | Record<any, any>) {
    // this._resetHeaderValue(headers, 'Access-Control-Allow-Origin', "*")
    // this._resetHeaderValue(headers, 'Access-Control-Allow-Headers', "*")
    // this._resetHeaderValue(headers, 'Access-Control-Allow-Methods', "*")
    // this._resetHeaderValue(headers, 'Access-Control-Allow-Credentials', "true")
    this._resetHeaderValue(headers, 'Access-Control-Allow-Origin', ["*"])
    this._resetHeaderValue(headers, 'Access-Control-Allow-Headers', ["*"])
    this._resetHeaderValue(headers, 'Access-Control-Allow-Methods', ["*"])
    // this._resetHeaderValue(headers, 'Access-Control-Allow-Credentials', ["true"])

    this._deleteHeaderValue(headers, 'Content-Security-Policy')
    return headers
  }

  private async _rewriteFetch() {
    registerSchemesFingerprintBySession(
      this.win.webContents.session,
      async (request: Request) => {
        const cookieString = await this.getUrlCookieString(request.url)
        this._resetHeaderValue(request.headers, 'Cookie', cookieString)
        return request
      },
      async (request: Request, response: Response) => {
        await this.setResponseCookies(response)
        this._allowCSP(response.headers)
        return response
      }
    )
  }

  private _lastCookieString = ''
  private hookRequest() {
    // this.win.webContents.session.webRequest.onBeforeSendHeaders({
    //   urls: ['<all_urls>']
    // }, async (detail, callback) => {
    //   const isMainHost = (url) => url.startsWith('https://live-backstage.tiktok.com')
    //   const { requestHeaders } = detail
    //   const cookieString = await this.getUrlCookieString(detail.url)
    //   if (!requestHeaders['Cookie'] && !requestHeaders['cookie']) {
    //     if (isMainHost(detail.url)) {
    //       if (cookieString.length <= 300) {
    //         callback({ cancel: true })
    //         return
    //       }
    //       requestHeaders['cookie'] = cookieString || this._lastCookieString
    //     }
    //   }
    //   if (isMainHost(detail.url) && cookieString.length >= 300) {
    //     this._lastCookieString = cookieString
    //   }
    //   callback({ requestHeaders })
    // })

    this.win.webContents.session.webRequest.onHeadersReceived({
      urls: ['<all_urls>']
    }, (detail, callback) => {
      const { responseHeaders } = detail
      this._allowCSP(responseHeaders)
      callback({ responseHeaders })
    })
  }

  private fllowResize(isShow: boolean = true, x: number = 0, y: number = 0) {
    if (globalEnv.isDev) {
      y = 28
    }
    if (!isShow) {
      this.win.hide()
    } else {
      this.win.show()
      this.win.maximize()
      // const bounds = mainWindow.win.getBounds()
      // this.win.setBounds({ x, y, width: bounds.width - (bounds.width / 7.5), height: bounds.height })
    }
  }

  public isRunnning() {
    if (!this.win) return false
    return !this.win?.webContents?.isDestroyed()
  }

  public currentShowStatus() {
    if (!this.win) return false
    if (this.win.webContents && this.win.webContents.isDestroyed()) return false
    return this.win.isVisible()
  }

  // 隐藏窗口内容（通过移动到屏幕外）
  public hideWindow() {
    if (this.win && this.isRunnning() && this.win.webContents && !this.win.webContents.isDestroyed()) {
      try {
        this.fllowResize(false)
        return true;
      } catch (error) {
        console.error("隐藏公会窗口失败:", error);
      }
    } else {
      console.log("公会窗口不存在或未运行");
    }
    return false;
  }

  // 显示窗口内容（移回到屏幕内）
  public showWindow() {
    if (this.win && this.isRunnning() && this.win.webContents && !this.win.webContents.isDestroyed()) {
      try {
        this.fllowResize();
        return true;
      } catch (error) {
        console.error("显示公会窗口失败:", error);
      }
    } else {
      this.createWindow(true);
    }
    return true;
  }

  private _startLoopClearStorage() {
    this._clearStorageTimer = setInterval(async () => {
      if (this.win && !this.win.webContents.isDestroyed()) {
        this.win.webContents.session
          .clearStorageData({
            storages: ['cookies', 'localstorage', 'shadercache', 'cachestorage'],
            quotas: ['temporary', 'syncable']
          })
          .then(() => {
            console.log('定期清理：公会窗口存储数据已清除');
          })
          .catch((error) => {
            console.error('清理公会窗口存储数据时出错:', error);
          });
      }
    }, 30 * 60 * 1000) // 30分钟执行一次
  }

  public async startTask() {
    if (this.isRunnning()) return
    this.createWindow(false)
    this._startLoopClearStorage()
  }

  public stopTask() {
    clearInterval(this._clearStorageTimer)
    if (this.win && this.win.webContents) {
      this.win.destroy()
      this.win = null
      console.log("停止 TIKTOK 窗口任务")
    }
  }
}

export const tiktokBackstageWindowManager = new TiktokBackstageWindowManager();
