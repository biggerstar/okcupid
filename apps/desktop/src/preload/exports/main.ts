import { contextBridge, ipcRenderer } from "electron/renderer";
import { useTitlebar } from "../common/titlebar";

console.log('main preload 加载成功');

useTitlebar({
  color: '#FFFFFF',
  resetPosition: true,
  overflowHidden: true,
  titleSuffix: {
    suffix: ` FLJ内部使用-淘宝1688爬取信息`,
    showVersion: true,
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
  async deleteProduct(ids = {}) {
    return ipcRenderer.invoke('delete-product', ids)
  }
}
contextBridge.exposeInMainWorld('__API__', __API__)
