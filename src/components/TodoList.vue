<template>
  <ul class="todo-main">
   <TodoItem
       v-for="todoObj in todos"
       :key="todoObj.id"
       :todo="todoObj"
       :checkTodo="checkTodo"
       :delTodo = "delTodo"
   />

  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  props:['todos','checkTodo','delTodo'],
  data(){
    return{

    }
  },
  components:{
      TodoItem
  },

}
</script>

<style scoped>
*{
  margin: 0px;
}
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}


</style>