<template>
  <view class="mine">
    <view class="black" />
    <view class="main-wrap">
      <view class="hu">
        <view class="avatar-wrap flex justify-center align-center">
          <image
            v-if="!isLogin"
            class="avatar"
            src="../../images/avatar.png"
          />
          <image
            v-else
            class="avatar"
            :src="userInfo.avatar"
          />
        </view>
      </view>
      <view class="main ">
        <view class="nickname article__h2 text-center">
          {{ isLogin ? userInfo.nickname : '' }}
        </view>
        <view class="article__info text-center">
          玩转智能，保持年轻
        </view>
        <view class="card flex  padding-sm margin-tb">
          <view class="left text-center">
            <view>{{ manualsCount }}</view>
            <view class="article__info">
              我的手册
            </view>
          </view>
          <view class="right text-center">
            <view>0</view>
            <view class="article__info">
              喜欢的手册
            </view>
          </view>
        </view>
        <view class="flex">
          <view
            class="heng-card flex flex-direction justify-center align-center margin-right"
            @tap="unopen"
          >
            <image
              class="heng-card-icon "
              src="../../images/taiyang.png"
            />
            <view class="article__info margin-top-sm">
              新手指南
            </view>
          </view>
          <view
            class="heng-card flex flex-direction justify-center align-center margin-right"
            @tap="unopen"
          >
            <image
              class="heng-card-icon "
              src="../../images/liwu.png"
            />
            <view class="article__info margin-top-sm">
              推荐有礼
            </view>
          </view>
          <view
            class="heng-card flex flex-direction justify-center align-center"
            @tap="unopen"
          >
            <image
              class="heng-card-icon "
              src="../../images/bi.png"
            />
            <view class="article__info margin-top-sm">
              意见反馈
            </view>
          </view>
        </view>
        <button
          v-show="disPlayExitLoginButton"
          class="margin-top"
          type="primary"
          @tap="exitLogin"
        >
          退出登陆
        </button>
      </view>

    </view>

  </view>
</template>

<script>
  import Taro from '@tarojs/taro'

  export default {
    data() {
      return {
        userInfo: {},
        isLogin: false,
        env: process.env.TARO_ENV
      }
    },
    onShow() {
      this.userInfo = Taro.getStorageSync('userInfo') || {}
      this.isLogin = !!Taro.getStorageSync('token') || '' //有token说明登陆成功
      console.log('userInfo',this.userInfo);
    },
    computed: {
      manualsCount() {
        return this.$store.state.manualList.length
      },
      disPlayExitLoginButton() {
        return this.env === 'h5' && this.isLogin
      }
    },
    methods: {
      exitLogin() {
        Taro.clearStorageSync()
        Taro.reLaunch({
          url:'/pages/index/index'
        })
      },
      unopen() {
        Taro.showToast({
          icon: 'none',
          title:'未开发，敬请期待！'
        })
      },
      login() {
        Taro.navigateTo({
          url:'/pages/login/index'
        })
      }
    },
  }
</script>

<style lang="scss" >
.mine {
  height: 100vh;
  background-color: #efefef;
  .black {
    width: 100%;
    height: 400px;
    background-color:#101010;
  }
  .main-wrap {
    .hu {
      position: relative;
      width: 100%;
      height: 150px;
      border-radius:  50%/100% 100% 0 0;
      margin-top: -150px;
      background: #efefef;
      border: 1px solid #efefef;
      .avatar-wrap {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #000;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -60%;
        .avatar {
          width:120px;
          height: 120px;
          border-radius: 50%;
        }
      }
    }
    .main {
      background: #efefef;
      padding: 0 40px 0 40px;
      .card {
         background-color: #fff;
        .left {
          width: 50%;
        }
        .right {
          width: 50%;
        }
      }
      .heng-card {
        width: 200px;
        height: 220px;
        border-radius: 16px;
        background-color: #fff;
        font-size: 28px;
      }
      .heng-card-icon {
        width: 56px;
        height: 56px;
      }
    }
  }

}
</style>