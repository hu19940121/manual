import request from '@/utils/request'


// 获取banner列表
export function getBannerList() {
  return request({
    url: '/api/v2/manualBanner/list',
    method: 'get',
  })
}
