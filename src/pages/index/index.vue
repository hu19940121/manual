<template>
  <view class="index">

    <view class="top padding-sm">
      <view class="top-name">
        软件使用手册
      </view>
      <view class="top-desc">
        打造极客老爸老妈养成计划
      </view>
    </view>
    <view class="main padding">
      <view
        v-for="(item,index) in list"
        :key="index"
        class="margin-bottom"
      >
        <manual-item :info="item" />
      </view>
      <view
        class="add margin-top flex flex-direction justify-center align-center"
        @tap="add"
      >
        <image
          class="add-icon"
          src="../../images/add.png"
        />
        <view>点击添加</view>
      </view>
    </view>
  </view>
</template>

<script>
  import manualItem from '@/components/manualItem'
  import Taro from '@tarojs/taro'

  export default {
    components: {
      manualItem,
    },
    data() {
      return {
        list: [
          {
            icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3053856589,1015129567&fm=26&gp=0.jpg',
            name:'抖音',
            desc: '记录美好生活',
            online: false
          },
          {
            icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3262171803,2318469631&fm=26&gp=0.jpg',
            name:'微信',
            desc: '轻松连接好友',
            online: true
          }
        ]
      }
    },
    methods: {
      add() {
        // 跳转到目的页面，打开新页面
        Taro.switchTab({
          url: '/pages/bookCenter/index'
        })
      }
    },
  }
</script>

<style lang="scss">
.index {
  min-height: 100vh;
  background-color: #efefef;
  .top {
    background-color: #fff;
    .top-name {
      font-size: 40px;
      color: #101010;
    }
    .top-desc {
      font-size: 28px;
      color: #9B9A9A;
    }
  }
  .main {
    .add {
      background: #fff;
      height: 180px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 100);
      font-size: 26px;
    }
    .add-icon {
      width: 80px;
      height: 80px;
    }
  }
}
</style>