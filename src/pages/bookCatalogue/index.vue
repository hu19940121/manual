<template>
  <view class="book-catalogue">
    <view class="banner flex flex-direction align-center padding-top">
      <view class="align-center flex title-wrap">
        <image
          class="icon-image"
          src="https://resource.kaier001.com/20190506share-bg.png"
        />
        <view class="margin-left-xs">
          微信
        </view>
      </view>
      <view class="desc">
        - 软件使用手册 -
      </view>
    </view>
    <view class="list padding-lg">
      <view
        v-for="item in 10"
        :key="item"
        class="list-item padding-sm margin-bottom"
        @tap="read"
      >
        如何乘坐公交车
      </view>
    </view>
  </view>
</template>

<script>
  import Taro from '@tarojs/taro'

  export default {
    methods: {
      read() {
        Taro.navigateTo({
          url: '/pages/bookDetail/index'
        })
      }
    },
  }
</script>

<style lang="scss">
.book-catalogue {
  .banner {
    width: 100%;
    height: 320px;
    background-color:green ;
    color: rgba(126, 222, 182, 100);
    .title-wrap {
      font-size: 56px;
      .icon-image {
        width: 120px;
        height: 120px;
      }
    }
    .desc {
      margin-top: 60px;
    }
  }
  .list {
    border-radius: 50px 50px 0px 0px;
    background: #fff;
    height: 500px;
    margin-top: -80px;
    .list-item {
      border-radius: 16px;
      background-color: rgba(239, 239, 239, 100);
      font-size: 28px;
    }
  }
}
</style>