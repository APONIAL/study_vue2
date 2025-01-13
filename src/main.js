import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/gobal.css'
Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(vm)