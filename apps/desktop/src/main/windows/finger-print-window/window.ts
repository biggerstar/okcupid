import { FingerPrintWebContentsView } from "@/main/interface";
import { FingerPrintGenerator } from "@marketing/fingerprint-server";
import { mainWindow } from "../app/app";

export class FingerPrintWebContentsViewManager {
  public testView: FingerPrintWebContentsView | null = null
  public async createTestWindow() {
    const fingerprint = new FingerPrintGenerator({
      // userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      // userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
    });
    // console.log("🚀 ~ FingerPrintWe  bConten  ts ViewMan age r ~ c reateTestWindow ~ fingerprint:", fingerprint)
    const view = new FingerPrintWebContentsView({
      fingerprint,
      webPreferences: { 
        // partition: `${Math.random() * 10000000}`,
        partition: 'persist:finger-print-test131', 
      },
    });
    this.testView = view
    mainWindow.win.contentView.addChildView(view)
    mainWindow.win.maximize()
    view.setBounds({ x: 80, y: 100, width: 1720, height: 1000 })
    // view.webContents.loadURL('http://localhost:5555/#/home')  
    // view.webContents.loadURL('https://bot.sannysoft.com')  
    // view.webContents.loadURL('https://www.browserscan.net/zh')    
    // view.webContents.loadURL('https://pixelscan.net')    
    view.webContents.loadURL('https://abrahamjuliot.github.io/creepjs/')    
    // view.webContents.loadURL('https://www.baidu.com')
    // view.webContents.loadURL('about:blank')
    // view.webContents.loadURL('https://www.zhihu.com/question/567861411')  

    // view.webContents.loadURL('https://browserleaks.com/javascript')
    // view.webContents.loadURL('https://www.mafengwo.cn/i/24638490.html')
    view.webContents.openDevTools()

    // view.webContents.debugger.sendCommand

    // setTimeout(()=> {
    //   console.log(webContents.getAllWebContents().map(web=>{
    //     return {
    //       ua:  web.userAgent,
    //       url: web.getURL()
    //     }
    //   }))
    // }, 8000)
    // view.webContents.session.setSSLConfig
  }

  public destroyTestWindow() {
    if (this.testView) {
      mainWindow.win.contentView.removeChildView(this.testView)
      this.testView = null
    }
  }
}

export const fingerPrintWebContentsViewManager = new FingerPrintWebContentsViewManager();
