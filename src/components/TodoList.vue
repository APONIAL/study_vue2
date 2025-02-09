<template>
  <ul class="todo-main">
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInLeft"
        leave-active-class="animate__backOutRight"
    >
      <TodoItem
          v-for="todoObj in todos"
          :key="todoObj.id"
          :todo="todoObj"
      />
    </transition-group>
  </ul>
</template>

<script>
import 'animate.css';
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  props:['todos'],
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
  margin: 0;
}
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

/*
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
*/


</style>