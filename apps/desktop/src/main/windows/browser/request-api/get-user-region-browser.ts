import axios from 'axios';

export async function getUserRegionWithBrowser(username: string) {
  if (!username) throw new Error('username is require')
  const config = {
    method: 'get',
    url: `https://www.tiktok.com/@${username}`,
    headers: {
      'accept': '*/*',
      'accept-language': 'zh-CN',
    }
  };
  const html = await axios(config).then(res => res.data).catch(() => '')
  const doc = document.implementation.createHTMLDocument()
  doc.documentElement.innerHTML = html
  const scriptEl = doc.querySelector('script[id="__UNIVERSAL_DATA_FOR_REHYDRATION__"]')
  if (!scriptEl) return null
  try {
    const jsonInfo = JSON.parse(scriptEl.innerHTML)
    const userDetail = jsonInfo?.['__DEFAULT_SCOPE__']?.['webapp.user-detail']
    return userDetail?.['userInfo']?.['user']?.['region']
  } catch (e) {
    return null
  }
}
