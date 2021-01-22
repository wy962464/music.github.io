import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 1 引入axios
import axios from "@/myaxios/myaxios"
//2  将 axios 挂载到Vue原型上
Vue.prototype.$http=axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
