<template>
  <view class="book-center padding">
    <view class="banner">
      <swiper
        class="swiper"
        indicator-color="#999"
        indicator-active-color="#333"
        circular
        indicator-dots
        autoplay
      >
        <swiper-item>
          <image
            mode="aspectFill"
            class="swiper-item-image"
            :src="imageUrl"
          />
        </swiper-item>
        <swiper-item>
          <image
            class="swiper-item-image"
            mode="aspectFill"
            :src="imageUrl"
          />
        </swiper-item>
      </swiper>
    </view>
    <view class="main">
      <view class="title padding-tb article__h3">
        常用软件
      </view>
      <view class="list">
        <scroll-view
          class="scroll-view_H"
          scroll-x="true"
          style="width: 100%"
          @scroll="scroll"
        >
          <soft-item
            v-for="(item,index) in softList"
            :key="index"
            :info="item"
          />
        </scroll-view>
      </view>

      <view class="title padding-tb article__h3">
        限时购物
      </view>
      <view class="list">
        <scroll-view
          class="scroll-view_H"
          scroll-x="true"
          style="width: 100%"
          @scroll="scroll"
        >
          <soft-item
            v-for="(item,index) in softList"
            :key="index"
            :info="item"
          />
        </scroll-view>
      </view>

      <view class="title padding-tb article__h3">
        社交聊天
      </view>
      <view class="list">
        <scroll-view
          class="scroll-view_H"
          :scroll-x="true"
          style="width: 100%"
          @scroll="scroll"
        >
          <soft-item
            v-for="(item,index) in softList"
            :key="index"
            :info="item"
          />
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
  import softItem from '@/components/softItem'
  export default {
    components: {
      softItem,
    },
    data() {
      return {
        imageUrl: 'https://resource.kaier001.com/20190506share-bg.png',
        softList:[
          {
            name:'抖音',
            desc: '记录美好生活',
            isJoin: true
          },
          {
            name:'微信',
            desc: '轻松连接好友',
            isJoin: false
          },
          {
            name:'拼多多',
            desc: '拼着买，才省钱',
            isJoin: true
          },
          {
            name:'拼多多',
            desc: '拼着买，才省钱',
            isJoin: true
          }
        ]
      }
    },
    methods: {
      upper(e) {
        console.log('upper:', e)
      },

      lower(e) {
        console.log('lower:', e)
      },

      scroll(e) {
        console.log('scroll:', e)
      }
    },
  }
</script>

<style lang="scss">
.scroll-view_H{
  white-space: nowrap;
}
.book-center {
  background-color: #efefef;
  .banner {
    width: 100%;
    height: 300px;
    .swiper{
      width: 100%;
      height: 100%;
      .swiper-item-image {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  .main {
    .list {
    }
  }
}
</style>