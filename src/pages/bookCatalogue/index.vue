<template>
  <view class="book-catalogue">
    <view class="banner flex flex-direction align-center padding-top">
      <view class="align-center flex title-wrap">
        <image
          class="icon-image"
          :src="manualInfo.icon"
        />
        <view class="margin-left-xs">
          {{ manualInfo.name }}
        </view>
      </view>
      <view class="desc">
        - 软件使用手册 -
      </view>
    </view>
    <view class="list padding-lg">
      <view
        v-for="section in manualInfo.sections"
        :key="section.id"
        class="list-item padding-sm margin-bottom"
        @tap="read(section)"
      >
        {{ section.name }}
      </view>
    </view>
  </view>
</template>

<script>
  import Taro from '@tarojs/taro'
  import { getSectionsByManualId } from '@/api/section'
  export default {
    data() {
      return {
        manualInfo: {
          sections:[]
        }
      }
    },
    onLoad(options) {
      this.getSectionsByManualId(options.manualId)
    },
    methods: {
      getSectionsByManualId(id) {
        getSectionsByManualId({ manualId: id }).then((res)=>{
          this.manualInfo = res.data || {}
        })
      },
      read(section) {
        Taro.navigateTo({
          url: `/pages/bookDetail/index?sectionId=${section.id}`
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