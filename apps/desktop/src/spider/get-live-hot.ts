import { generateRandomNumbers } from '@/utils/string';
import { commonUA, uaVersion } from '@/utils/ua';
import axios from 'axios';

export function getLiveHot(region: string = 'US') {
  const queryParams = {
    aid: "1988",
    app_language: "en",
    app_name: "tiktok_web",
    browser_language: "en-US",
    browser_name: "Mozilla",
    browser_online: "true",
    browser_platform: "MacIntel",
    browser_version: uaVersion,
    channel: "tiktok_web",
    channel_id: "87",
    cookie_enabled: "true",
    data_collection_enabled: "false",
    device_id: `7495${generateRandomNumbers(15)}`,
    device_platform: "web_pc",
    device_type: "web_h265",
    focus_state: "true",
    from_page: "",
    history_len: "1",
    is_fullscreen: "false",
    is_non_personalized: "0",
    is_page_visible: "true",
    max_time: "0",
    os: "mac",
    priority_region: "",
    referer: "",
    region: region,
    req_from: "live_mt_pc_web_rec_tab_loadmore",
    screen_height: "1200",
    screen_width: "1800",
    tz_name: "America/New_York",
    user_is_login: "false",
    webcast_language: "en"
  };

  const config = {
    method: 'get',
    url: 'https://webcast.tiktok.com/webcast/feed/',
    params: queryParams,
    headers: {
      'accept': '*/*',
      'accept-language': 'en-US',
      'origin': 'https://www.tiktok.com',
      'priority': 'u=1, i',
      'referer': 'https://www.tiktok.com/',
      'sec-ch-ua': '"Not:A-Brand";v="24", "Chromium";v="134"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': commonUA
    }
  };

  return axios(config)
}
