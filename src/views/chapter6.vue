<template>
  <div>
    <!--        todolist 案例-->
    <hr/>
   <div> <TodoContainer/></div>
  </div>
</template>

<script>
import TodoContainer from "@/components/TodoContainer";
export default {
  name: "chapter6",
  data() {
    return {

    }
  },
  components: {
    TodoContainer
  }
}
</script>

<style scoped>

</style>