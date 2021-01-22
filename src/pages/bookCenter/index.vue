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
        <swiper-item
          v-for="banner in bannerList"
          :key="banner.id"
        >
          <image

            mode="aspectFill"
            class="swiper-item-image"
            :src="banner.image"
          />
        </swiper-item>
      </swiper>
    </view>
    <view class="main">
      <view
        v-for="soft in softList"
        :key="soft.id"
      >
        <view class="title padding-tb article__h3">
          {{ soft.name }}
        </view>
        <view class="list">
          <scroll-view
            class="scroll-view_H"
            scroll-x="true"
            style="width: 100%"
            @scroll="scroll"
          >
            <soft-item
              v-for="manual in soft.manuals"
              :key="manual.id"
              :info="manual"
              @updateSuccess="handleUpdateSuccess"
            />
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import softItem from '@/components/softItem'
  import { getManualCateList } from '@/api/manualCate'
  import { getBannerList } from '@/api/banner'

  
  import { mapActions } from 'vuex'

  export default {
    components: {
      softItem,
    },
    onLoad() {
      console.log('zhixing');
      const token = this.$Taro.getStorageSync('token') || '' 
      if (!token) {
        this.redirectToLogin()
      }
      this.getManualCateList()
    },
    onShow() {
      this.getBannerList()
    },
    data() {
      return {
        softList:[
        ],
        bannerList:[]
      }
    },
    methods: {
      ...mapActions(['getManualList']),
      handleUpdateSuccess() {
        this.getManualCateList()
        this.getManualList()
      },
      getBannerList() {
        getBannerList().then(res=>{
          this.bannerList = res.data || []
          console.log(this.bannerList);
        })
      },
      getManualCateList() {
        getManualCateList().then((res)=>{
          this.softList = res.data || []
        })
      },
      redirectToLogin() {
        this.$Taro.navigateTo({
          url:'/pages/login/index'
        })
      },
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