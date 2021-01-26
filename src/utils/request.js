
import Taro from '@tarojs/taro'
import { getCurrentPageUrl,redirecrtLoginPage } from '@/utils/index'

const host = 'http://127.0.0.1:7002'
// const host = 'https://kaier001.com'

const request = (data) => {
  let url = ''
  if (process.env.TARO_ENV === 'weapp') {
    url = host + data.url //小程序 接口请求绝对路径
  } else if (process.env.TARO_ENV === 'h5') {
    url = data.url //h5 接口请求方式为相对路径 走代理配置
  }
 return new Promise((resolve,reject)=>{
    Taro.request({
      url: url, 
      data: data.data || '',
      method: data.method,
      header: {
        'content-type': 'application/json', // 默认值
        'token': Taro.getStorageSync('token') || ''
      },
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          if (res.data.code === -1) { //未登录 跳转登录页面
            handleJumpLoginPage()
          } else { //其他异常 直接弹窗
            Taro.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1000
            })
            reject(res.data.message)
          }

        }
      },
      fail:function(err) {
        reject(err)
      }
    })
 })
}

function handleJumpLoginPage() {
  let loginUrl = ''
  console.log('getCurrentPageUrl',getCurrentPageUrl());
  //先判断当前页面是不是login页面 防止多次执行跳转logo页面
  if (getCurrentPageUrl() === '/pages/login/index') {
    return 
  }
  redirecrtLoginPage()
}
 
export default request
