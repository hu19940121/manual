<template>
  <view>
    <view class="noAuthUserPage">
      <image
        class="login-logo"
        src="./huojian.png"
      />
      <view><text class="login-desc">
        登陆后会享受更多服务哦～
      </text></view>
      <button
        v-if="currentEnv === 'weapp'"
        class="login-button"
        type="primary"
        size="mini"
        open-type="getUserInfo"
        @getuserinfo="onGetUserInfo"
      >
        确定
      </button>
      <button
        v-else
        class="login-button"
        type="primary"
        size="mini"
        @tap="h5login"
      >
        确定
      </button>
    </view>
    <!-- <button
      size="large"
      open-type="getUserInfo"
      @getuserinfo="onGetUserInfo"
    >
      登陆
    </button> -->
  </view>
</template>

<script>
  import Taro from '@tarojs/taro'
  import { wxAuthLogin } from '@/api/user'
  import { getPageUrlWithArgs } from '@/utils/index'
  export default {
    data() {
      return {
        currentEnv: process.env.TARO_ENV
      }
    },
    methods: {

      onGetUserInfo(eventDetail) {
        if (eventDetail.detail.errMsg === 'getUserInfo:fail auth deny') { //拒绝授权 不调接口
          return false
        }
        const pages = Taro.getCurrentPages()
        const filterdPages =  pages.filter(page=>{
            return page.route !== "pages/login/index"
        })
        Taro.login({
          success: function (res) {
            if (res.code) {
              wxAuthLogin({
                code: res.code,
                encryptedData: eventDetail.detail.encryptedData,
                iv: eventDetail.detail.iv,
              }).then((loginRes)=>{
                console.log('loginRes',loginRes);
                Taro.setStorageSync('userInfo',loginRes.data.respData)
                Taro.setStorageSync('token', loginRes.data.respData.token)
                if (filterdPages.length > 0 ) { 
                  //返回上一夜
                  const url = getPageUrlWithArgs(filterdPages[0])
                  Taro.reLaunch({
                    url
                  })
                } else {
                  //返回首页
                  Taro.switchTab({
                    url: '/pages/index/index'
                  })
                }
              })
              //发起网络请求
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })

      },
      h5login() {
        console.log('login');
      }
    },
  }
</script>

<style lang="scss">
.noAuthUserPage {
  text-align: center
}
.login-logo {
  display: block;
  width: 300px;
  height: 300px;
  margin: 80px auto 0;
}
.noAuthUserPage .login-desc {
  font-size: 26px;
  color: #333
}
.noAuthUserPage .login-button {
  display: block;
  width: 260px;
  margin: 20px auto 0;
}
</style>