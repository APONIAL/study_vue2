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
    <!--   自定义事件-->
    <div>
      <h2>自定义事件</h2>
      <parent/>
    </div>
  </div>
</template>

<script>
import TodoContainer from "@/components/TodoContainer";
import Parent from "@/components/CustomParent";

export default {
  name: "chapter6",
  data() {
    return {}
  },
  components: {
    TodoContainer,
    Parent
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

</style>