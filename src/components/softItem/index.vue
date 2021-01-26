<template>
  <view class="soft-item-wrap">

    <view class="soft-item flex flex-direction justify-center align-center padding-sm margin-right-sm">
      <image
        class="soft-item-logo"
        mode="aspectFill"
        :src="info.icon"
      />
      <view class="article__h3 margin-top-xs">
        {{ info.name }}
      </view>
      <view class="article__info">
        {{ info.des }}
      </view>
      <!-- <button>取消加入</button> -->
      <button
        v-if="info.isJoin"
        class="button margin-top-xs"
        type="primary"
        size="mini"
        plain="true"
        @tap="cancelJoin"
      >
        取消加入
      </button>
      <button
        v-else
        class="button margin-top-xs"
        type="primary"
        size="mini"
        @tap="join" 
      >
        加入
      </button>
    </view>
  </view>

</template>

<script>
  import Taro from '@tarojs/taro'
  import { addManual,delManual } from '@/api/user'
  export default {
    props: {
      info: {
        type: Object,
        default: ()=>({})
      },
    },
    methods: {
      join() {
        addManual({
          manualId: this.info.id
        }).then((res)=>{
          this.$emit('updateSuccess')
          Taro.showToast({
            title: '加入成功',
            icon: 'success',
            duration: 1000
          })
        })
      },
      cancelJoin() {
        delManual({
          manualId: this.info.id
        }).then((res)=>{
          this.$emit('updateSuccess')
          Taro.showToast({
            title: '取消成功',
            icon: 'success',
            duration: 1000
          })
        })
      }
    },
  }
</script>

<style lang="scss">
.soft-item-wrap {
  display: inline-block;
  .soft-item {
    width: 240px;
    height: 300px;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: #fff;

    .soft-item-logo {
      width: 80px;
      height: 80px;
    }
  }
}

</style>