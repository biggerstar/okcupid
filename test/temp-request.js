var raw = JSON.stringify({
   "DisplayIDList": [
      "rosebleu7777",
      "laeti900",
      "sow_summer"
   ]
});

var requestOptions = {
   method: 'POST',
   body: raw,
   redirect: 'follow'
};

fetch("https://live-backstage.tiktok.com/creators/live/union_platform_api/agency/union_invite/batch_check_anchor/", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
