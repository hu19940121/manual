import Vue from 'vue'
import store from './store'
import Taro from '@tarojs/taro'
Vue.prototype.$Taro = Taro
import './app.scss'

// Vue.config.productionTip = false

const App = new Vue({
  store,
  onShow (options) {
    console.log('options', options);
  },
  onLaunch() {
    // this.$Taro.checkSession({
    //   success: function () {
    //     console.log('未过期');
    //     //session_key 未过期，并且在本生命周期一直有效
    //   },
    //   fail:()=>{
    //     this.$Taro.login({
    //       success: function (res) {
    //         if (res.code) {
    //           console.log('res',res);
    //         } else {
    //           console.log('登录失败！' + res.errMsg)
    //         }
    //       }
    //     })
    //   }
    // })

    // console.log('onLaunch');
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
