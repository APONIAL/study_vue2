<template>
<!--  计算属性-->
    <div>
      姓：<input type="text" v-model="firstName" ><br/>
      名：<input type="text"  v-model="lastName"><br/>
      全名：<span>{{fullName}}</span>
      <br>
      <h2>今天天气很{{weather}}</h2>
      <button @click="changeWeather">切换天气</button>
      <br>
      <b3>a的值是：{{numbers.a}}</b3>
      <button @click="numbers.a++">点我让我a+1</button> <b3>
      b的值是：{{numbers.b}}</b3>
      <button @click="numbers.b++">点我让我a+1</button>
      <button @click="numbers = {a:666,b:777}">替换numbers</button>
    </div>

</template>

<script>
export default {
  name: "chapter2",
  data() {
    return {
        firstName: '张',
        lastName: '三',
        fullName:'张-三',
        isHot:true,
        numbers:{
          a:1,
          b:1
      }
    }
  },
  methods:{
    changeWeather(){
      this.isHot = !this.isHot
    }
  },
  //对象形式
  computed:{
    /*fullName:{
      //get作用：当读取fullName时，会自动执行get方法且返回值作为fullName的值
      //get调用时机，1.初次读取fullName 2.当fullName依赖的数据发生变化时，会重新调用get方法
      get(){
        return this.firstName+this.lastName
      },
      //set调用时机，1.当fullName的值发生变化时，会自动调用set方法
      set(value){
          const arr = value.split('-')
          this.firstName = arr[0]
          this.lastName = arr[1]
      }
    }*/
    // 简写
    fullName(){
      return this.firstName+this.lastName
    },
    weather(){
      return this.isHot?'炎热':'寒冷'
    }
  },
  watch:{
    //监视isHot属性
    //计算属性也可以被监视
    //正常写法
   /* isHot:{
      //初始化时，会自动调用handler方法
      // immediate:true,
      //调用时机：当isHot的值发生变化时，会自动调用handler方法
      handler(newValue,oldValue){
          console.log("isHot变化了")
      }*/
    //简写
    isHot(newValue,oldValue){
      console.log("isHot变化了")
    },

    //监视多级结构中某个属性的变化
    numbers:{
      deep:true,
      handler(){
        console.log('numbers变化了')
      }
    },
  //  用监视实现姓名拼接
    firstName(newValue){
      setTimeout(()=>{
        this.fullName = newValue+'-'+this.lastName
      },1000)
    },
    lastName(newValue){
      this.fullName = this.firstName+'-'+newValue
    }
  }
}
</script>

<style scoped>

</style>