<template>
  <view
    class="manual-item flex align-center justify-between"
    @tap="study"
  >
    <view class="left flex padding-left-sm">
      <image
        class="left-image"
        :src="info.icon"
      />
      <view class="left-desc padding-left-xs">
        <view class="title">
          {{ info.name }}
        </view>
        <view class="desc">
          {{ info.des }}
        </view>
      </view>
    </view>
    <view
      class="right flex flex-direction justify-center align-center"
    >
      <view :class="['icon', { on:info.isOnline }]">
        <image
          class="icon-image"
          src="../../images/shangxian.png"
        />
      </view>
      <view :class="['shangxian-text', 'margin-top-xs', { online:info.isOnline } ]">
        {{ info.isOnline ? '开始学习' : '即将上线' }}
      </view>

    </view>
  </view>
</template>

<script>
  import Taro from '@tarojs/taro'


  export default {
    props: {
      info: {
        type: Object,
        default: ()=>({})
      },
    },
    data() {
      return {
      }
    },
    methods: {
      study() {
        if (!this.info.isOnline) {
          Taro.showToast({
            icon: 'none',
            duration: 1000,
            title: '暂未上线，敬请期待！'
          })
          return 
        }
        // 跳转到目的页面，打开新页面
        Taro.navigateTo({
          url: `/pages/bookCatalogue/index?manualId=${this.info.id}`
        })
      }
    },
  }
</script>

<style lang="scss">
.manual-item {
  background: #fff;
  height: 180px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 100);
  .left {
    .left-image {
      width: 100px;
      height: 100px;
      border-radius: 8px;
    }
    .left-desc {
      .title {
        color: #242323;
        font-size: 36px;
      }
      .desc {
        font-size: 28px;
        color: #A6A6A6;
      }
    }
  }
  .right {
    width: 200px;
    .shangxian-text {
      font-size: 28px;
      color:#A6A6A6 ;
      &.online {
        color: #242424 ;
      }
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #E5E5EA;
      &.on {
        background-color: #242424;
      }
      .icon-image {
        width: 48px;
        height: 48px;
      }
    }
  }

}
</style>