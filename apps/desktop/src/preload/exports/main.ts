import { contextBridge, ipcRenderer } from "electron/renderer";
import { useTitlebar } from "../common/titlebar";

console.log('main preload 加载成功');

useTitlebar({
  color: '#FFFFFF',
  resetPosition: true,
  overflowHidden: true,
  titleSuffix: {
    suffix: ` FLJ内部使用-淘宝1688爬取信息`,
    showVersion: false,
    separator: ' - ',
  }
})

const __API__ = {
  async login(options = {}) {
    return ipcRenderer.invoke('login', options)
  },
  async getPruductList(options = {}) {
    return ipcRenderer.invoke('get-product-data', options)
  },
  async getOneList(options = {}) {
    return ipcRenderer.invoke('get-one-product', options)
  },
  async deleteProduct(ids = {}) {
    return ipcRenderer.invoke('delete-product', ids)
  },
  showWindow() {
    return ipcRenderer.invoke('show-window');
  },
  hideWindow() {
    return ipcRenderer.invoke('hide-window');
  },
  isShow() {
    return ipcRenderer.invoke('is-window-show');
  },
  loadURL(url: string) {
    return ipcRenderer.invoke('load-url', url);
  },
  getURL() {
    return ipcRenderer.invoke('get-current-url');
  }
}
contextBridge.exposeInMainWorld('__API__', __API__)
