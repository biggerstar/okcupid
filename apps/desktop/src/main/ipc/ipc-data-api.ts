import { ProductEntity } from "@/orm/entities/product"
import { ipcMain } from "electron"

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
