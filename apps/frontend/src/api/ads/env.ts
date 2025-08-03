import axios from 'axios';

export function getAdsEnv({ page, page_size }: { page: number, page_size: number }) {
  return axios.get('http://local.adspower.com:50325/api/v1/user/list', {
    params: {
      page,
      page_size,
    },
  }).then((res) => {
    return res.data;
  });
}

export function updateAdsEnv(data: any) {
  // see https://localapi-doc-zh.adspower.net/docs/Cvoh4z
  return axios.post('http://local.adspower.com:50325/api/v1/user/update', data).then(res => res.data);
}

export function openBrowser(user_id: string) {
  return axios.post('http://local.adspower.com:50325/api/v1/browser/start', { user_id, ip_tab: 0 });
}

export function closeBrowser(user_id: string) {
  return axios.post('http://local.adspower.com:50325/api/v1/browser/stop', { user_id });
}

export function checkBrowserStatus(user_id: string) {
  return axios.get('http://local.adspower.com:50325/api/v2/browser-profile/active', { params: { profile_id: user_id } }).then(res => res.data);
}

export async function getBrowserList(options: any = {}, includeIds: any[] = []) {
  const result = await getAdsEnv({ page: options.currentPage || 1, page_size: 20000 })
  return {
    items: Array.from(result?.data?.list || []).filter((o: any) => {
      if (includeIds.length) {
        return includeIds.includes(o.user_id)
      }
      return !o.remark
    }),
    total: result.data?.list.length,
  }
}

