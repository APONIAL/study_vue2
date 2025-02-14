import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count'
Vue.use(Vuex)



//人员管理相关配置类
const personOptions = {
    namespaced: true,
    state: {
        persons: [
            {id: '001', name: '张三'},
            {id: '002', name: 'jerry'}
        ]
    },
    auctions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.unshift(value)
        }
    },
    getters: {
        firstPersonName(state){
            return state.persons[0].name
        }
    }
}

export default new Vuex.Store({

    //准备state——用于存储数据
    state: {
        name: "vuex",
        age: 12,
    },
    //准备getters——用于将state中的数据进行加工
    // getters: {
    //     bigSum(state) {
    //         return state.sum * 10
    //     }
    // },

    //准备actions——响应组件中的动作
    /*
      actions: {

      },
    */

    //准备mutations——用于操作数据state
    /*  mutations: {
        ADD(state,value){
          state.sum += value
        },
        SUBTRACT(state,value){
          state.sum -= value
        },
        ADD_PERSON(state,value){
          state.persons.unshift(value)
        }
      },*/
    modules: {
        countAbout:countOptions,
        personAbout:personOptions
    }
})
