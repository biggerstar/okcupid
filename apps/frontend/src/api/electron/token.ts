import { requestClient } from '#/api/request';
import { useAuthStore } from '#/store/auth';
import { message } from 'ant-design-vue';

export async function checkToken() {
  if (location.href.includes('/auth/')) return
  const _useAuthStore = useAuthStore()
  const config = await __API__.getAppConfig()
  if (!config.userId || !config.token) {
    _useAuthStore.logout()
    return
  }
  const data = JSON.stringify({
    "userId": config.userId,
    "token": config.token
  });

  requestClient.post(
    `${window._SERVER_API_}/bsanchor/sysApi/open/checkToken`,
    data,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .catch((error) => {
      message.error("登录已过期");
      _useAuthStore.logout()
      console.log(error);
    });
}

setTimeout(checkToken, 1000)
setTimeout(checkToken, 3000)
setTimeout(checkToken, 5000)
setInterval(checkToken, 20000)
