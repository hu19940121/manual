import request from '@/utils/request'


export function wxAuthLogin(data) {
  return request({
    url: '/api/v2/manualUser/wxAuthLogin',
    method: 'post',
    data
  })
}
export function login(data) {
  return request({
    url: '/api/v2/manualUser/login',
    method: 'post',
    data
  })
}
export function register(data) {
  return request({
    url: '/api/v2/manualUser/register',
    method: 'post',
    data
  })
}
export function myManuals() {
  return request({
    url: '/api/v2/manualUser/myManuals',
    method: 'post',
  })
}


export function addManual(data) {
  return request({
    url: '/api/v2/manualUser/addManual',
    method: 'post',
    data
  })
}
export function delManual(data) {
  return request({
    url: '/api/v2/manualUser/delManual',
    method: 'post',
    data
  })
}

