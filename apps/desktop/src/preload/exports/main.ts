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
  login(options = {}) {
    return ipcRenderer.invoke('login', options)
  }
}
contextBridge.exposeInMainWorld('__API__', __API__)
