import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs  from "dayjs";
import '../public/gobal.css'
import Student from "@/components/Student";
import plugins from "@/plugins";
//使用插件
Vue.use(plugins,1,2,3)

Vue.config.productionTip = false


//注册全局组件
Vue.component('Student',Student)
Vue.prototype.x = 99
const vm = new Vue({
  router,
  store,
  //功能：将app组件放入容器中
  render: h => h(App)
  // render(CreateElement){
  //   return CreateElement('h1','helloworld')
  // }
}).$mount('#app')

