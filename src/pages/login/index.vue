<template>
  <view>

    <view class="noAuthUserPage">
      <image src="./huojian.png" />
      <text>登陆后会享受更多服务哦～</text>
      <button
        type="primary"
        size="mini"
        open-type="getUserInfo"
        @getuserinfo="onGetUserInfo"
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
  import { wxAuthLogin } from '@/api/user'
  import { getPageUrlWithArgs } from '@/utils/index'
  export default {
    data() {
      return {
        
      }
    },
    methods: {

      onGetUserInfo(eventDetail) {
        const pages = this.$Taro.getCurrentPages()
        const filterdPages =  pages.filter(page=>{
            return page.route !== "pages/login/index"
        })
        const that = this
        this.$Taro.login({
          success: function (res) {
            if (res.code) {
              wxAuthLogin({
                code: res.code,
                encryptedData: eventDetail.detail.encryptedData,
                iv: eventDetail.detail.iv,
              }).then((loginRes)=>{
                console.log('loginRes',loginRes);
                that.$Taro.setStorageSync('userInfo',loginRes.data.respData)
                that.$Taro.setStorageSync('token', loginRes.data.respData.token)
                if (filterdPages.length > 0 ) { 
                  //返回上一夜
                  const url = getPageUrlWithArgs(filterdPages[0])
                  that.$Taro.reLaunch({
                    url
                  })
                } else {
                  //返回首页
                  that.$Taro.switchTab({
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

      }
    },
  }
</script>

<style lang="scss">
.noAuthUserPage {
  text-align: center
}
.noAuthUserPage image {
  display: block;
  width: 300px;
  height: 300px;
  margin: 80px auto 0;
}
.noAuthUserPage text {
  font-size: 26px;
  color: #333
}
.noAuthUserPage button {
  display: block;
  width: 260px;
  margin: 20px auto 0;
}
</style>