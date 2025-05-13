import { request } from './request';

/**
 * 批量添加主播信息
 * @param {Array} anchorList 主播信息列表
 * @param {boolean} [isProduction=false] 是否使用正式环境
 * @returns {Promise} 返回请求结果
 */
export const addBatchAnchors = (anchorData) => {
  // 确定请求地址
  const baseUrl = '/bsanchor/bAnchor/addBatch';

  // 验证必填字段
  if (!Array.isArray(anchorData.list)) {
    return Promise.reject(new Error('主播信息必须是一个数组'));
  }

  for (const anchor of anchorData.list) {
    if (!anchor.displayId) {
      return Promise.reject(new Error('主播ID(displayId)是必填字段'));
    }
  }

  // 发送请求
  return request({
    method: 'post',
    url: baseUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: anchorData
  })
    .then(response => {
      console.log("🚀 ~ addBatchAnchors ~ response.data:", response.data)
      if (response.data.code === 200) {
        return response.data;
      } else {
        throw new Error(response.data.msg || '添加主播信息失败');
      }
    })
    .catch(error => {
      console.error('添加主播信息出错:', error.message);
      throw error;
    });
}

