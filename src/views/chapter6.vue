<template>
  <div>
    <!--        todolist 案例-->
    <hr/>
    <div>
      <TodoContainer/>
    </div>

    <hr/>
    <!--    localstorage-->
    <div>
      <h2>localstorage的使用</h2>
      <button @click="saveData">保存数据</button>
      <button @click="readData">读取数据</button>
      <button @click="deleteData">删除数据</button>
    </div>

    <hr/>
    <!--   自定义事件和事件总线-->
    <div>
      <h2>自定义事件和事件总线</h2>
      <parent/>
    </div>
    <hr/>
<!--    过渡与动画-->
      <div>
        <h2>过渡与动画</h2>
        <button @click="isShow = !isShow">显示/隐藏</button>
<!--        <transition-group name="tao" appear>-->
<!--          <h1 v-show="isShow" :key="1">你好啊！</h1>-->
<!--          <h1 v-show="isShow" :key="2">你好啊！</h1>-->
<!--        </transition-group>-->
        <p>使用animate.css</p>
        <transition-group
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__bounceOutUp"
        >
          <h1 v-show="isShow" :key="3">你好啊！</h1>
          <h1 v-show="isShow" :key="4">你好啊！</h1>
        </transition-group>

      </div>
  </div>
</template>

<script>
import TodoContainer from "@/components/TodoContainer";
import Parent from "@/components/CustomParent";
import 'animate.css'
export default {
  name: "chapter6",
  data() {
    return {
      isShow: true
    }
  },
  components: {
    TodoContainer,
    Parent,
  },
  methods: {
    saveData() {
      let p = {name: '张三', age: 18}
      localStorage.setItem('msg', 'hello')
      localStorage.setItem('person', JSON.stringify(p))
    },
    readData() {
      let msg = localStorage.getItem('msg')
      let person = localStorage.getItem('person')
      console.log(msg)
      console.log(person)
      console.log(JSON.parse(person))
    },
    deleteData() {
      localStorage.removeItem('msg')
      localStorage.clear()
    }
  }


}
</script>

<style scoped>
h1{
  background: orange;
}
/*进入起点,离开的终点*/
.tao-enter,.tao-leave-to{
  transform: translateX(-100%);
}
.tao-enter-active,.tao-leave-active{
  transition:  0.5s linear;
}
/*进入终点，离开的起点*/
.tao-enter-to,.tao-leave{
  transform: translateX(0);
}



</style>