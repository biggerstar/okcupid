import { message } from "ant-design-vue";
import axios from "axios";
import { ipcRenderer } from "electron";
import { Classification } from "./classification";

async function getSkuDetail(product: string) {
  var config = {
    method: 'post',
    url: 'https://8033.jp0663.com/api?method=xiangceid.get.shangchuanshangpinxinxi.nocanshu',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: {
      'xiangceid': product
    }
  };

  return axios(config)
}

export function loadDetail(pruductId: string) {
  getSkuDetail(pruductId)
    .then(async (res) => {
      console.log(`🚀 ~ getSkuDetail ~ res:`, res.data)
      const data: Record<any, any> = res.data?.data
      if (!data) return;
      const isPreSale = data.huohao?.includes('预售') || data.pifabiaoti?.includes('预售')
      const saveData = {
        id: pruductId,
        type: 'junpu',
        title: (isPreSale ? '预售 - ' : '') + data.shangpinbiaoti,
        keyword: sessionStorage.getItem('lastSearchName') || '',
        detailUrl: `https://pc.jp0663.com/detail/${pruductId}`,
        deliveryDay: 1,
        data
      }
      console.log(`🚀 ~ getSkuDetail ~ saveData:`, saveData)
      const isExist = await ipcRenderer.invoke('save-product-data', saveData)
      if (isExist) message.info(`产品已存在 - ${data.shangpinbiaoti}`)
      else message.success(`采集成功- ${data.shangpinbiaoti}`)
    })
}

export function recordSearchName() {
  const searchParams = new URL(location.href).searchParams
  let searchName = searchParams.get('searchName')
  if (!searchName) {
    const type = searchParams.get('type')
    const found = Classification.find(item => item.leimu === type)
    if (found) searchName = found.leimumingcheng
  }
  // console.log(searchName)
  if (searchName) {
    sessionStorage.setItem('lastSearchName', searchName)
  }
}

export function useJpo663Page() {
  console.log('军埔网加载');
  window.addEventListener('load', () => {
    if (location.href.startsWith('https://pc.jp0663.com/detail/')) {
      const pruductId = location.pathname.split('/')[2];
      loadDetail(pruductId)
    }
    if (location.href.startsWith('https://pc.jp0663.com/new')) {
      setInterval(recordSearchName, 1000)
    }
  })
}
