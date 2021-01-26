<template>
  <div>

    <van-form
      class="margin-top"
      @submit="onSubmit"
    >
      <van-field
        v-model="username"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
        >
          登陆
        </van-button>
        <van-button
          class="margin-top"
          round
          block
          native-type="button"
          type="primary"
          @click="goRegister"
        >
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import Taro from '@tarojs/taro'
  import { login } from '@/api/user'
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      goRegister() {
        Taro.navigateTo({
          url: '/pages/h5Register/index'
        })
      },
      onSubmit(values) {
        login(values).then((res)=>{
          Taro.setStorageSync('userInfo',res.data)
          Taro.setStorageSync('token', res.data.token)
          Taro.showToast({
            title: '登陆成功！',
            duration: 1000
          })
          setTimeout(() => {
            Taro.switchTab({
              url: '/pages/index/index'
            }) 
          }, 1000);
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>