<template>
  <view class="soft-item-wrap">

    <view class="soft-item flex flex-direction justify-center align-center padding-sm margin-right-sm">
      <image
        class="soft-item-logo"
        mode="aspectFill"
        src="https://resource.kaier001.com/20190506share-bg.png"
      />
      <view class="article__h3 margin-top-xs">
        {{ info.name }}
      </view>
      <view class="article__info">
        {{ info.desc }}
      </view>
      <!-- <button>取消加入</button> -->
      <button
        v-if="info.isJoin"
        class="button margin-top-xs"
        type="primary"
        size="mini"
        plain="true"
      >
        取消加入
      </button>
      <button
        v-else
        class="button margin-top-xs"
        type="primary"
        size="mini"
      >
        加入
      </button>
    </view>
  </view>

</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default: ()=>({})
      },
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