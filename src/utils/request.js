
import Taro from '@tarojs/taro'
import { getCurrentPageUrl } from '@/utils/index'

// const host = 'http://127.0.0.1:7002/api'
const host = 'https://kaier001.com/api'

const request = (data) => {
 return new Promise((resolve,reject)=>{
    Taro.request({
      url: host + data.url, 
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
  console.log('getCurrentPageUrl',getCurrentPageUrl());
  //先判断当前页面是不是login页面 防止多次执行跳转logo页面
  if (getCurrentPageUrl() === '/pages/login/index') {
    return 
  }
  Taro.navigateTo({
    url:'/pages/login/index'
  })
}
 
export default request
