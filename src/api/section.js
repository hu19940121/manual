import request from '@/utils/request'


// 根据手册id获取小节列表
export function getSectionsByManualId(data) {
  return request({
    url: '/v2/manual/listWithSectionsByManualId',
    method: 'get',
    data
  })
}

// 根据小节id获取小节详情list
export function getSectionsDetailBySectionId(data) {
  return request({
    url: '/v2/sectionDetail/list',
    method: 'get',
    data
  })
}
