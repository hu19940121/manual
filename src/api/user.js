import request from '@/utils/request'


export function wxAuthLogin(data) {
  return request({
    url: '/v2/manualUser/wxAuthLogin',
    method: 'post',
    data
  })
}



export function myManuals() {
  return request({
    url: '/v2/manualUser/myManuals',
    method: 'post',
  })
}


export function addManual(data) {
  return request({
    url: '/v2/manualUser/addManual',
    method: 'post',
    data
  })
}
export function delManual(data) {
  return request({
    url: '/v2/manualUser/delManual',
    method: 'post',
    data
  })
}

