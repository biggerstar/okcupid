import { ProductEntity } from "@/orm/entities/product";
import { ipcMain } from "electron";
import md5 from 'md5';
import { AC } from "./users";

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
      message: '登录失败, 你的 IP 已经被记录'
    }
  }
})

ipcMain.handle('get-product-data', async (_ev, options = {}) => {
  const startIndex = options.pageSize && options.pageSize ? options.pageSize * (options.currentPage - 1) : 0
  const [result, count] = await ProductEntity.findAndCount({
    where: options.where,
    take: options.pageSize || 50,
    skip: startIndex ?? 0
  })
  result.forEach((item: any, index) => {
    item.index = startIndex + index + 1
  })
  return {
    code: 0,
    data: {
      items: result,
      total: count
    }
  }
})

ipcMain.handle('delete-product', (_ev: any, ids: string[]) => {
  ProductEntity.delete(ids)
})
