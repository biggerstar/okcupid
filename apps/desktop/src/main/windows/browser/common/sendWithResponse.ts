import { ipcMain } from "electron"

export async function sendWithResponse<T extends any>(win, channel, data): Promise<T> {
  return new Promise((resolve) => {
    // 生成唯一 ID 用于匹配请求和响应
    const requestId = Date.now()

    // 监听响应
    ipcMain.once(`${channel}-response-${requestId}`, (event, response) => {
      resolve(response)
    })

    // 发送请求
    win.webContents.send(channel, { requestId, data })
  })
}
