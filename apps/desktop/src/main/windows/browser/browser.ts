import { globalEnv } from "@/global/global-env";
import { globalMainPathParser } from "@/global/global-main-path-parser";
import { app, WebContentsView } from 'electron';
import os from 'os';
import { mainWindow } from "../app/app";

const macUA = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.88 Safari/537.36`
const windowUA = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0`

const UA = os.platform() === 'darwin' ? macUA : windowUA
app.userAgentFallback = UA
// 设置应用级首选语言（支持多个语言，按优先级排序）
app.commandLine.appendArgument('lang=zh-CN')

export class BrowserinternetView {
  public win: WebContentsView | null = null
  private _clearStorageTimer: any
  public async createWindow(isShow: boolean = true) {
    const url = 'about:blank'
    if (this.win && this.win.webContents && !this.win.webContents.isDestroyed()) {
      return
    }

    this.win = new WebContentsView({
      webPreferences: {
        spellcheck: false,
        sandbox: false,
        nodeIntegration: false,
        contextIsolation: false,
        preload: globalMainPathParser.resolvePreload('browser.cjs').toString(),
        partition: 'persist:encommerce',
      },
    });
    mainWindow.win.contentView.addChildView(this.win)
    this.win.webContents.setBackgroundThrottling(false)
    console.log('已成功创建 浏览器 窗口!')

    this.fllowResize(isShow)
    this.win.webContents.loadURL(url)
    this.win.webContents.setAudioMuted(true)

    if (globalEnv.isDev) {
      this.win.webContents.openDevTools()
    }
    mainWindow.win.addListener('resize', () => this.fllowResize(isShow))
    // this.interceptRequest()
    this.win.webContents.setWindowOpenHandler(({ url }) => {
      this.win.webContents.loadURL(url)
      return {
        action: 'deny',
      }
    })
    this.win.webContents.on('will-attach-webview', (event) => {
      event.preventDefault()
    })

    mainWindow.win.addListener('close', () => {
      this.stopTask()
    })
    // other
    // preventDevtools(this.win.webContents.session)
  }

  private fllowResize(isShow: boolean = true, x: number = 0, y: number = 0) {
    if (!this.win) return
    if (!this.win.webContents) return

    const bounds = mainWindow.win.getBounds()
    if (!isShow) {
      this.win.setVisible(false)
    } else {
      this.win.setVisible(true)
    }
    this.win.setBounds({ x: x + 80, y: 28, width: bounds.width - 80, height: bounds.height })
  }

  private interceptRequest() {
    this.win.webContents.session.webRequest.onBeforeRequest(
      {
        urls: ['http://*/*', 'https://*/*'],
      },
      (detail, callback) => {
        // let isAllow = false
        // const { url } = detail
        // const passList = [
        //   '/webcast/feed/?',
        //   '/webcast/im/fetch/?',
        // ]
        // if (!this.isInLivePage()) isAllow = true
        // if (url.endsWith('.js') || url.endsWith('.css')) isAllow = true
        // if (url.startsWith('https://www.tiktok.com/live')) isAllow = true
        // for (const urlPart of passList) {
        //   if (url.includes(urlPart)) {
        //     isAllow = true
        //     break
        //   }
        // }
        // callback({ cancel: !isAllow })


        const blackList = [
          '/stream',
          // 'webapp-live-stack/runtime',
          // 'static/js/builder-runtime',
        ]
        for (const urlPart of blackList) {
          if (detail.url.includes(urlPart)) {
            callback({ cancel: true })
            return
          }
        }
        callback({})
      }
    )

    this.win.webContents.session.webRequest.onHeadersReceived(
      {
        urls: ['http://*/*', 'https://*/*'],
      }, (detail, callback) => {
        const { responseHeaders } = detail
        delete responseHeaders['content-security-policy']
        delete responseHeaders['content-security-policy-report-only']
        // if (detail.url === "https://www.tiktok.com/live") {
        //   console.log(`🚀 ~ TiktokTaskManager ~ interceptRequest ~ detail:`, detail)
        // }
        callback({ responseHeaders })
      })
  }

  private _loopTimer = null

  public isRunnning() {
    if (!this.win) return false
    return !this.win.webContents?.isDestroyed()
  }

  public currentShowStatus() {
    if (!this.win) return false
    if (this.win.webContents && this.win.webContents.isDestroyed()) return false
    return this.win.getVisible()
  }

  // 隐藏窗口内容（通过关闭窗口）
  public hideWindow() {
    if (this.win && this.isRunnning() && this.win.webContents && !this.win.webContents.isDestroyed()) {
      try {
        this.fllowResize(false)
        console.log("TK窗口已从界面中移除");
        return true;
      } catch (error) {
        console.error("隐藏TK窗口失败:", error);
      }
    } else {
      console.log("TK窗口不存在或未运行");
    }
    return false;
  }

  // 显示窗口内容（重新添加到界面）
  public showWindow() {
    if (this.win && this.isRunnning() && this.win.webContents && !this.win.webContents.isDestroyed()) {
      try {
        this.fllowResize();
        return true;
      } catch (error) {
        console.error("显示TK窗口失败:", error);
      }
    } else {
      this.createWindow(true);
    }
    return true;
  }

  private _startLoopClearStorage() {
    this._clearStorageTimer = setInterval(async () => {
      // 不再使用executeJavaScript检查错误
      // 改为定期清理存储数据
      if (this.win && !this.win.webContents?.isDestroyed()) {
        const isLogined = await this.win.webContents.executeJavaScript('isLogined()')
        console.log("🚀 ~ TiktokTaskManager ~ this._clearStorageTimer=setInterval ~ isLogined:", isLogined)
        if (isLogined) return
        this.win.webContents.session
          .clearStorageData({
            storages: ['cookies', 'localstorage', 'shadercache', 'cachestorage'],
            quotas: ['temporary', 'syncable']
          })
          .then(() => {
            console.log('定期清理：所有存储数据已清除');
          })
          .catch((error) => {
            console.error('清理存储数据时出错:', error);
          });
      }
    }, 30 * 1000)
  }
  private _loopReloadTimer = null
  public async startTask() {
    if (this.isRunnning()) return
    this.createWindow(false)
    // this._startLoopClearStorage()
  }

  public stopTask() {
    clearInterval(this._loopTimer)
    clearInterval(this._clearStorageTimer)
    clearInterval(this._loopReloadTimer)
    if (this.win && this.win.webContents) {
      this.win.webContents.close()
      mainWindow.win.contentView.removeChildView(this.win)
      this.win = null
    }
    console.log("停止 TIKTOK 窗口任务")
  }
}

export const browserinternetView = new BrowserinternetView();
