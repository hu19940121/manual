import request from '@/utils/request'


// 根据手册分类列表
export function getManualCateList() {
  return request({
    url: '/v2/manualCate/listWithManual',
    method: 'get',
  })
}

