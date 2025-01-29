import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from "../utils/filters";
import dayjs  from "dayjs";
import '../public/gobal.css'


Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.directive('fbind', {
  //指令绑定到元素上
  bind(el, binding) {
    el.value = binding.value
  },
  //当元素插入到DOM中时调用
  inserted(el, binding) {
    el.focus()
  },
  update(el, binding) {
    el.value = binding.value
  }
})
Vue.directive('big',function big(el, binding) {
  el.style.fontSize = `${binding.value}px`
  el.innerHTML = binding.value * 10
},)

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
