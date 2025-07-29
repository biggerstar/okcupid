import { sleep } from "@/utils/time";
import { message } from "ant-design-vue";
import { ipcRenderer } from "electron";

async function scroll() {
  window.scrollTo({ top: 1000, behavior: 'smooth' })
  await sleep(100)
  window.scrollTo({ top: 2000, behavior: 'smooth' })
  await sleep(100)
  window.scrollTo({ top: 3000, behavior: 'smooth' })
  await sleep(100)
  window.scrollTo({ top: 4000, behavior: 'smooth' })
  await sleep(100)
  window.scrollTo({ top: 6000, behavior: 'smooth' })
  await sleep(100)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  await sleep(800)
}

async function parseProductDetail() {
  await scroll()
  const productId = location.pathname.replace('.html', '').replace('/', '')
  const productAttrList = Array.from(document.querySelector<HTMLElement>('.goods-attr')?.children || [])
  const goodInfoList = Array.from(document.querySelector('.goods-info-content .flex')?.children || [])
  const releaseTimeEl = productAttrList.find(item => item.textContent.includes('上架时间'))
  const updateTimeEl = productAttrList.find(item => item.textContent.includes('更新时间'))
  if (!releaseTimeEl || !updateTimeEl) return;
  const releaseTime = releaseTimeEl.textContent.replace('上架时间：', '').trim()
  const updateTime = updateTimeEl.textContent.replace('更新时间：', '').trim()
  const productTypeEl = document.querySelector('.goods-info-content .flex a');
  const productType = productTypeEl ? productTypeEl.textContent.split('>')[1] : ''
  const merchantNotesEl = goodInfoList.find(el => el.textContent.includes('商家备注'))
  let isPreSale = false
  if (merchantNotesEl && merchantNotesEl.textContent.includes('预售')) isPreSale = true

  const mainImageList = Array
    .from(document.querySelectorAll('#swiperList .gallery-pic-item img'))
    .map((el) => {
      if (!el.getAttribute('src').startsWith('data:') && el.getAttribute('src').startsWith('http')) return el.getAttribute('src')
    })
    .filter(Boolean)

  const goodsPictureList = Array.from(document.querySelectorAll('.goods-picture img'))
    .map((el) => {
      if (!el.getAttribute('src').startsWith('data:') && el.getAttribute('src').startsWith('http')) return el.getAttribute('src')
    })
    .filter(Boolean)

  const colorList = []
  const colorElementList = Array.from(document.querySelector('.color-list')?.children || [])
  colorElementList.forEach(el => {
    colorList.push({
      name: el.querySelector('.color-item-name').textContent,
      img: el.querySelector('img')?.getAttribute('src') || '',
    })
  })

  const skuList = []
  const skuElementList = Array.from(document.querySelector('.color-sku-card-content').children || [])
  skuElementList.forEach(el => {
    skuList.push({
      name: el.querySelector('.color-sku-card-item-name')?.textContent.replace('\n', '').trim() || '',
      price: el.querySelector('.price')?.textContent.replace('￥', '')
    })
  })

  const saveData = {
    id: productId,
    title: (isPreSale ? '预售 - ' : '') + document.querySelector('.good-title')?.textContent.trim().replaceAll('\n', ''),
    type: '52dianshang',
    keyword: sessionStorage.getItem('lastSearchName') || productType,
    detailUrl: `https://www.52dsy.com/${productId}.html`,
    deliveryDay: 1,
    data: {
      releaseTime,
      updateTime,
      mainImageList,
      goodsPictureList,
      colorList,
      skuList
    }
  }
  const isExist = await ipcRenderer.invoke('save-product-data', saveData)
  if (isExist) message.info(`产品已存在 - ${saveData.title}`)
  else message.success(`采集成功- ${saveData.title}`)
  console.log(`🚀 ~ parseProductDetail ~ saveData:`, saveData)
}

function recordSearchName() {
  const searchParams = new URL(location.href).searchParams
  let searchName = searchParams.get('key_word')
  if (!searchName) {
    const searchInput = document.querySelector('.goods-filter-term .search-value')
    if (searchInput) searchName = searchInput.getAttribute('value')
  }
  if (!searchName) {
    const searchNameEl = document.querySelector<HTMLElement>('.goods-filter-term div[data-path="1"] .typetext .current')
    if (searchNameEl) searchName = searchNameEl.textContent
  }
  sessionStorage.setItem('lastSearchName', searchName)
}

export function use52DianShang() {
  console.log('52电商园加载')
  window.addEventListener('load', () => {
    if (location.href.startsWith('https://www.52dsy.com/') && location.pathname.endsWith('.html')) {
      parseProductDetail()
    }
    if (location.href.startsWith('https://www.52dsy.com/goodsList.html')) {
      recordSearchName()
    }
  })
}
