import { ElectronWindowEventEnum } from "@/enum/event";
import { ipcMain } from 'electron';
import { fingerPrintWebContentsViewManager } from './window';
ipcMain.on(ElectronWindowEventEnum.FP_OPEN_TEST_VIEW, () => {
  console.log('打开窗口')
  fingerPrintWebContentsViewManager.createTestWindow()
})
ipcMain.on(ElectronWindowEventEnum.FP_CLOSE_TEST_VIEW, () => {
  console.log('关闭窗口')
  fingerPrintWebContentsViewManager.destroyTestWindow()
})
