import filters from "../../utils/filters";

export default {
    install(Vue,arg1,arg2,arg3) {
        console.log(arg1,arg2,arg3);
        //定义全局过滤器
        Object.keys(filters).forEach(key => {
            Vue.filter(key, filters[key])
        })
        // 定义全局指令
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
        Vue.directive('big', function big(el, binding) {
            el.style.fontSize = `${binding.value}px`
            el.innerHTML = binding.value * 10
        },)
    //    给Vue原型上添加一个方法
        Vue.prototype.hello = function () {
            alert('hello')
        }
    }
}