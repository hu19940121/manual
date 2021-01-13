<template>
  <view class="book-detail padding-lr">
    <view class="top text-center padding-tb-sm">
      <text>{{ list.length }}</text> / {{ currentIndex }}
    </view>
    <view class="shouces">
      <swiper
        class="swiper"
        indicator-color="#999"
        indicator-active-color="#333"
        circular
        :indicator-dots="true"
        autoplay
        @change="handleOnchange"
      >
        <swiper-item
          v-for="(item,index) in list"
          :key="index"
        > 
          <view class="swiper-item">
            <image
              mode=""
              class="swiper-item-image"
              :src="imageUrl"
            />
            <view class="desc padding-sm">
              <view class="desc-title article__info">
                操作指引-01
              </view>
              <view class="desc-text margin-top-xs">
                1.点击如图标记位置，在输入框中输入“乘车码” 
              </view>
              <view class="desc-text margin-top-xs">
                2.点击如图标记位置，在输入框中输入“乘车码” 
              </view>
              <view class="desc-text margin-top-xs">
                2.点击如图标记位置，在输入框中输入“乘车码” 
              </view>
            </view>
          </view>

        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list:[1,1,1,1,1,1],
        imageUrl: 'https://resource.kaier001.com/20190506share-bg.png',
        currentIndex: 1
      }
    },
    methods: {
      handleOnchange(e) {
        this.currentIndex = e.detail.current + 1
      }
    },
  }
</script>

<style lang="scss"  >
.book-detail {
  .top{
    text {
      color: #A6A6A6;
    }
  }
  .shouces {
    .swiper {
      width: 100%;
      height: 1100px;
      .swiper-item {
        width: 100%;
        height: 100%;
        .swiper-item-image{
          width: 100%;
          height: 800px;
        }
        .desc {
          background-color: #fafafa;
          .desc-text {
            font-size: 24px;
          }
        }
      }

    }


  }
}
</style>