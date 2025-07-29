import { ipcMain } from "electron";
import { browserinternetView } from "../windows/browser/browser";

ipcMain.handle('show-window', () => {
  browserinternetView.showWindow();
})

ipcMain.handle('hide-window', () => {
  browserinternetView.hideWindow();
})

ipcMain.handle('is-window-show', () => {
  return browserinternetView.currentShowStatus();
})

ipcMain.handle('load-url', (_, url) => {
  if (browserinternetView.isRunnning()) {
    browserinternetView.win.webContents.loadURL(url);
  }
})
