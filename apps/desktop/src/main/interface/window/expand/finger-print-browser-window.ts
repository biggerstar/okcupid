import { registerSchemesFingerprintBySession } from "@/main/interceptors";
import { preventDevtools } from "@/main/interceptors/devtools/prevent-devtools";
import { BaseHashRouterBrowserWindowOptions } from "@/main/interface";
import { FingerPrintGenerator } from "@marketing/fingerprint-server";
import { cloneDeep, merge } from 'lodash-es';
import setCookieParser from "set-cookie-parser";
import MIMEType from "whatwg-mimetype";
import { BaseHashRouterWebContentsView } from "../base/base-hash-router-web-contents-view";


export interface FingerPrintBrowserWindowOptions extends BaseHashRouterBrowserWindowOptions {
  /**
   * 设置窗口的指纹信息， 设置之后该窗口指纹便固定下来了
   * */
  fingerprint?: FingerPrintGenerator
}

/**
 * 严禁开启任何 nodeIntegration
*/
export class FingerPrintWebContentsView extends BaseHashRouterWebContentsView {
  private fingerprint: FingerPrintGenerator
  constructor(_windowOptions: FingerPrintBrowserWindowOptions = {}) {
    // init window options
    const windowOptions = cloneDeep(_windowOptions)
    windowOptions.webPreferences = windowOptions.webPreferences || {}

    if (!windowOptions.webPreferences.partition) {
      throw new Error('指纹浏览器必须设置 webPreferences.partition')
    }

    const additionalArguments = [
      `--lang=${windowOptions.fingerprint.language}`,
    ]

    merge<FingerPrintBrowserWindowOptions, FingerPrintBrowserWindowOptions>(
      windowOptions,
      {
        webPreferences: {
          additionalArguments,
          sandbox: true,
          nodeIntegration: false,
          contextIsolation: true,
          nodeIntegrationInSubFrames: false,
          nodeIntegrationInWorker: false,
          webviewTag: false,
          webSecurity: true,
        }
      }
    )

    super(windowOptions);

    // init fingerprint 
    this.fingerprint = windowOptions.fingerprint;
    if (this.fingerprint.userAgent) {
      // 这里不可使用 webContents.session.setUserAgent, 因为 electron 自身问题无法穿透 iframe
      this.webContents.setUserAgent(this.fingerprint.userAgent);
    }
    this._rewriteFetch()
    this.webContents.setWindowOpenHandler(({ url }) => {
      this.webContents.loadURL(url)
      return {
        action: 'deny',
      }
    })
    this.webContents.on('will-attach-webview', (event) => {
      event.preventDefault()
    })

    // other
    preventDevtools(this.webContents.session)
  }

  async setResponseCookies(response: Response) {
    for (const cookie of setCookieParser(response)) {
      delete cookie.sameSite
      await this.webContents.session.cookies.set({ ...cookie, url: response.url })
    }
  }

  async getUrlCookieString(url: string) {
    const cookies = await this.webContents.session.cookies.get({ url })
    return cookies.map(cookie => `${cookie.name}=${cookie.value}`).join(';')
  }

  private _allowCSP(response: Response) {
    const headers = new Headers(response.headers)
    this._resetHeaderValue(headers, 'Access-Control-Allow-Origin', "*")
    this._resetHeaderValue(headers, 'Access-Control-Allow-Headers', "*")
    this._resetHeaderValue(headers, 'Access-Control-Allow-Methods', "*")
    this._deleteHeaderValue(headers, 'Content-Security-Policy')

    Object.defineProperty(response, 'headers', { value: headers })
    return response
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

  private async _rewriteFetch() {
    // this.webContents.session.webRequest.onBeforeSendHeaders(
    //   {
    //     urls: ['http://*/*', 'https://*/*']
    //   },
    //   (detail, callback) => {
    //     console.log(detail.url, detail.requestHeaders)
    //     callback({ requestHeaders: detail.requestHeaders })
    //   })
    //   return
    registerSchemesFingerprintBySession(
      this.webContents.session,
      async (request: Request) => {
        console.log("🚀 ~ FingerPrintWebContentsView ~ request:", request)
        // const cookieString = await this.getUrlCookieString(request.url)
        // this._resetHeaderValue(request.headers, 'Cookie', cookieString)
        this._resetHeaderValue(request.headers, 'User-Agent', this.fingerprint.userAgent)
        this._resetHeaderValue(request.headers, 'Accept-Language', this.fingerprint.language)
        this._resetHeaderValue(request.headers, 'sec-ch-ua', `"Not:A-Brand";v="24", "Chromium";v="129"`)
        return request
      },
      async (request: Request, response: Response) => {
        await this.setResponseCookies(response)
        this._allowCSP(response)

        const mIMEType = MIMEType.parse(response.headers.get('content-type'))
        if (mIMEType && mIMEType.isHTML()) {
          // const html = await response.text()
          // return new Response(await this._injectFingerPrint(html), {
          //   headers: response.headers,
          //   status: response.status,
          //   statusText: response.statusText,
          // })
        }
        return response
      }
    )
  }
}

