import { request } from './request';

export const addBatchBoss = (bossData) => {
  // 确定请求地址
  const baseUrl = '/bsanchor/bBoss/addBatch';

  // 验证必填字段
  if (!Array.isArray(bossData.list)) {
    return Promise.reject(new Error('老板信息必须是一个数组'));
  }

  for (const anchor of bossData.list) {
    if (!anchor.bossId) {
      return Promise.reject(new Error('老板ID(displayId)是必填字段'));
    }
  }

  // 发送请求
  return request({
    method: 'post',
    url: baseUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: bossData
  })
    .then(response => {
      console.log("🚀 ~ addBatchBoss ~ response.data:", response.data)
      if (response.data.code === 200) {
        return response.data;
      } else {
        throw new Error(response.data.msg || '添加老板信息失败');
      }
    })
    .catch(error => {
      console.error('添老板信息出错:', error.message);
      throw error;
    });
}

