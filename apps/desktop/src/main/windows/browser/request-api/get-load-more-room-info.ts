import { generateRandomNumbers } from '@/utils/string';
import axios from 'axios';
import { UA } from '../common/UA';

export function getFeedInfo(type: string, region: string) {
  const queryParams = {
    aid: "1988",
    app_language: "zh-Hans",
    app_name: "tiktok_web",
    browser_language: "zh-CN",
    browser_name: "Mozilla",
    browser_online: "true",
    browser_platform: "MacIntel",
    browser_version: UA.replace('Mozilla/', ''),
    channel: "tiktok_web",
    channel_id: "1111006",
    cookie_enabled: "true",
    data_collection_enabled: "false",
    // device_id: "7495289541264261423",
    device_id: `74952${generateRandomNumbers(14)}`,
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
    priority_region: region,
    referer: "",
    region: region,
    req_from: type,
    screen_height: "1200",
    screen_width: "1800",
    tz_name: "Asia/Shanghai",
    user_is_login: "false",
    webcast_language: "zh-Hans",
  };

  const config = {
    method: 'get',
    url: 'https://webcast.tiktok.com/webcast/feed/',
    params: queryParams,
    headers: {
      'accept': '*/*',
      'accept-language': 'zh-CN',
      'origin': 'https://www.tiktok.com',
      'priority': 'u=1, i',
      'referer': 'https://www.tiktok.com/',
      'user-agent': UA,
    }
  };

  return axios(config)
}
