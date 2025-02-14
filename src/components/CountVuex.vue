<template>
  <div>
    <h4>当前求和为: {{ sum }}</h4>
    <h4>当前求和扩大十倍为: {{bigSum}}</h4>
    <p>{{school}} ---- {{subject}}</p>
    <p>{{firstName}}</p>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "CountVuex",
  data() {
    return {
      n: 1,//用户选择的数字
    }
  },
  methods: {
    /*increment() {
      this.$store.commit('ADD', this.n)
    },
    decrement() {
      this.$store.commit('SUBTRACT', this.n)
    },*/
    // 借助mapMutations映射方法为methods
    //方法中会调用commit去联系mutations
    ...mapMutations('countAbout',{
      increment: 'ADD',
      decrement: 'SUBTRACT'
    }),
    //数组写法
    // ...mapMutations(['ADD','SUBTRACT']),

  /*  incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    }*/
    // 借助mapActions映射方法为methods
    // 方法中会调用dispatch去联系actions
    ...mapActions('countAbout',{
      incrementOdd: 'addOdd',
      incrementWait: 'addWait'
    }),

  },
  computed:{
    //借助mapState映射state中的数据为计算属性(对象写法)
 /*   ...mapState({
      sum: 'sum',
      school:'school',
      subject:'subject',
    }),*/
    // ...mapState(['countAbout','personAbout']),
    //借助mapState映射state中的数据为计算属性(数组写法)
    // ...mapState(['sum','school','subject']),

    ...mapState("countAbout",['sum','school','subject']),
     /*bigSum() {
      return this.$store.getters.bigSum
    }*/
    //借助mapGetters映射getters中的数据为计算属性
   /* ...mapGetters('countAbout',{
      bigSum:'bigSum'
    })*/
    bigSum(){
      return this.$store.getters['countAbout/bigSum']
    },
    firstName(){
      return this.$store.getters['personAbout/firstPersonName']
    //  关闭命名空间
    //   return this.$store.getters.firstPersonName
    },

  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>
* {
  margin: 10px
}
</style>