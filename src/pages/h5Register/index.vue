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
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import Taro from '@tarojs/taro'
  import { register } from '@/api/user'
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      onSubmit(values) {
        register(values).then((res)=>{
          Taro.showToast({
            title:'注册成功！',
            icon:'none',
            duration: 1000
          })
          setTimeout( ()=>{
            Taro.redirectTo({
              url: '/pages/h5Login/index'
            })
          },1000)

        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>