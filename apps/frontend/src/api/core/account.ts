import { requestClient } from '#/api/request';
import type { UserInfo } from '@vben/types';
import type { SystemMenuApi } from '../system/menu';

export namespace AccountApi {
  export interface AccountInfo extends UserInfo {
    menus: SystemMenuApi.SystemMenu[];
    [key: string]: any;
  }

  export interface UpdateAccountParams {
    nickname?: string;
    avatar?: string;
    qq?: string;
    email?: string;
    phone?: string;
    remark?: string;
  }

  export interface UpdatePasswordParams {
    oldPassword: string;
    newPassword: string;
  }
}

/**
 * 获取当前用户信息
 */
export function getAccountInfo() {
  // return requestClient.get<AccountApi.AccountInfo>('/account/profile');
  return {
    id: 1,
    username: "user",
    status: 1,
    roles: [
    ]
  }
}

/**
 * 更新账户信息
 */
export function updateAccountInfo(data: AccountApi.UpdateAccountParams) {
  return requestClient.put('/account/update', data);
}

/**
 * 更新账户密码
 */
export function updateAccountPassword(data: AccountApi.UpdatePasswordParams) {
  return requestClient.post('/account/password', data);
}

/**
 * 获取账户菜单
 */
export function getAccountMenus() {
  return requestClient.get('/account/menus');
}

/**
 * 获取账户权限
 */
export function getAccountPermissions() {
  // return requestClient.get<string[]>('/account/permissions');
  return []
}

/**
 * 账户登出
 */
export async function logout() {
  // return requestClient.get('/account/logout');
  const config = await __API__.getAppConfig()
  if (!config.userId || !config.token) {
    return
  }
  const data = JSON.stringify({
    "userId": config.userId,
    "token": config.token
  });

  requestClient.post(
    `${window._SERVER_API_}/bsanchor/sysApi/open/deleteToken`,
    data,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  return {}
} 
