import axios from 'axios';
import * as cheerio from 'cheerio';
import { UA } from '../common/UA';

export async function getUserRegion(username: string) {
  if (!username) throw new Error('username is require')
  const headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN',
  }

  if (typeof window === 'undefined') {
    headers['origin'] = 'https://www.tiktok.com'
    headers['user-agent'] = UA
  }

  const config = {
    method: 'get',
    url: `https://www.tiktok.com/@${username}`,
    headers
  };
  const html = await axios(config).then(res => res.data).catch(() => '')
  const $ = cheerio.load(html)
  const scriptEl = $('script[id="__UNIVERSAL_DATA_FOR_REHYDRATION__"]').first()
  if (!scriptEl) return null
  try {
    const jsonInfo = JSON.parse(scriptEl.text())
    const userDetail = jsonInfo?.['__DEFAULT_SCOPE__']?.['webapp.user-detail']
    const region =  userDetail?.['userInfo']?.['user']?.['region']
    return region
  } catch (e) {
    return null
  }
}
