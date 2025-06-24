import { ProductEntity } from '@/orm/entities/product'
import * as cheerio from 'cheerio'

export async function parse1688(searchKeyword = '', content: string) {
  if (!content) return
  const $ = cheerio.load(content)
  const scriptEls = $('script')
  const coreScript = Array.from(scriptEls).find(node => $(node).text().includes('(window.contextPath'))
  const func = new Function('window', $(coreScript).text());
  const win: any = {};
  func(win);
  const serverResult = win.context?.result
  if (!serverResult) return
  const dataJson = serverResult.data?.Root?.fields?.dataJson
  if (!dataJson) return

  const title = dataJson.tempModel?.offerTitle || ''
  const itemId = dataJson.tempModel?.offerId || dataJson.qrCode
  let product: ProductEntity | null = await ProductEntity.findOne({ where: { id: itemId } })
  if (!product) {
    product = new ProductEntity()
    product.id = itemId
  }
  product.title = title
  product.keyword = searchKeyword
  product.detailUrl = dataJson.qrCode
  product.deliveryDay = 0
  product.type = '1688'
  product.skuList = Object
    .values(dataJson.skuModel.skuInfoMap || dataJson.skuModel.skuInfoMapOriginal)
    .map((item: Record<any, any>) => {
      item.specAttrs = (item.specAttrs as string).replace('&gt', '')
      return item
    })
  product.save()
    .then(() => console.log('1688 入库成功: ', searchKeyword, title))
    .catch((err) => console.error('1688 入库失败: ', searchKeyword, title, err.message))
}
