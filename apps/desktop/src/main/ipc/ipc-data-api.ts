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

ipcMain.handle('get-one-product', async (_ev, id: string) => {
  try {
    // 使用 findOne 方法获取单条数据
    const product = await ProductEntity.findOne({
      where: { id: id.toString() } // 根据ID查询
    });

    if (!product) {
      return {
        code: 404,
        message: 'Product not found'
      };
    }

    return {
      code: 0,
      data: product
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      code: 500,
      message: 'Internal server error'
    };
  }
});

ipcMain.handle('delete-product', (_ev: any, ids: string[]) => {
  ProductEntity.delete(ids)
})
