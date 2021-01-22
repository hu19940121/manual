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
        v-for="(item,index) in manualList"
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
  import { myManuals } from '@/api/user'
  import { mapActions } from 'vuex'
  export default {
    components: {
      manualItem,
    },
    onLoad() {
      this.init()
    },
    onShow() {

    },
    data() {
      return {
        list: [
        ]
      }
    },
    computed: {
      manualList() {
        return this.$store.state.manualList
      }
    },
    methods: {
      ...mapActions(['getManualList']),
      init() {
        const token = this.$Taro.getStorageSync('token') || '' 
        if (token) {
          this.getManualList()
        } else {
          this.list = []
        }
      },
      //获取我添加的手册
      // getManualList() {
      //   myManuals().then((res)=>{
      //     this.list = res.data || []
      //     this.$store.dispatch('changeManualsCount', this.list.length)
      //     console.log('res',res);
      //   })
      // },
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