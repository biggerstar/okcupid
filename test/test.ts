import axios from 'axios';

const queryParams = {
  aid: "1988",
  app_language: "en",
  app_name: "tiktok_web",
  browser_language: "en-US",
  browser_name: "Mozilla",
  browser_online: "true",
  browser_platform: "MacIntel",
  browser_version: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.88",
  channel: "tiktok_web",
  channel_id: "87",
  cookie_enabled: "true",
  data_collection_enabled: "false",
  device_id: "7495289541264160423",
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
  region: "EU",
  req_from: "live_mt_pc_web_rec_tab_loadmore",
  screen_height: "1200",
  screen_width: "1800",
  tz_name: "Asia/Shanghai",
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
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) @tiktok/process/0.0.1 Chrome/134.0.6998.88 Electron/35.0.3 Safari/537.36'
  }
};

while (true) {
  await axios(config)
    .then(function (response) {
      console.log(response.data.data.length);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
