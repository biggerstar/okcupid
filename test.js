import axios from 'axios';
var data = JSON.stringify({
   "region": "sg",
   "subtype": "3d",
   "detail": "",
   "fp": "verify_mblsgjui_P6Y4OcVF_ca1E_4o31_AASN_6Ykb8CLYBaIA",
   "server_sdk_env": "{\"idc\":\"sg1\",\"region\":\"ALISG\",\"server_type\":\"passport\"}",
   "did": "0",
   "msToken": "",
   "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
});

var config = {
   method: 'post',
   url: 'http://119.28.92.31:9999/web/captcha/',
   headers: { 
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 
      'Content-Type': 'application/json'
   },
   data : data
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});
