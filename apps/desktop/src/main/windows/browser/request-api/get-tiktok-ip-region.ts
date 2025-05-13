import axios from 'axios';
import * as cheerio from 'cheerio';
import { UA } from '../common/UA';

export async function getTiktokIpRegion() {
  const config = {
    method: 'get',
    url: 'https://www.tiktok.com/',
    headers: {
      'accept': '*/*',
      'accept-language': 'zh-CN',
      'origin': 'https://www.tiktok.com',
      'priority': 'u=1, i',
      'user-agent': UA,
    }
  };
  const html = await axios(config).then(res => res.data).catch(() => '')
  const $ = cheerio.load(html)
  const scriptEl = $('script[id="__UNIVERSAL_DATA_FOR_REHYDRATION__"]').first()
  if (!scriptEl) return null
  try {
    const jsonInfo =  JSON.parse(scriptEl.text())
    return jsonInfo?.['__DEFAULT_SCOPE__']?.['webapp.app-context']?.['region']
  } catch (e) {
    return null
  }
}
