import { ipcMain } from "electron";
import md5 from 'md5';

const AC = [
  {
    u: 'test',
    p: 'e10adc3949ba59abbe56e057f20f883e'
  }
]

ipcMain.handle('login', (_ev, options: Record<any, any> = {}) => {
  const { password, username } = options
  const passUser = AC.find((user) => {
    return username === user.u && user.p === md5(password)
  })
  if (passUser) {
    return {
      code: 0,
      data: {
        loginName: passUser.u,
        username: passUser.u,
        token: md5(JSON.stringify(passUser)),
        userId: Math.round(Math.random() * 1e6)
      }
    }
  } else {
    return {
      code: 1,
      message: '登录失败'
    }
  }
})

