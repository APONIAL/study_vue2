<template>
  <div id="root1">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--        将函数addTodo传递给子组件TodoHeader-->
        <todo-header @addTodo="addTodo"/>
        <todo-list :todos="todos" />
        <todo-footer
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @handleClear="handleClear"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: "TodoContainer",
  data() {
    return {
      //  初始化时先读取本地存储的todos
      //  || [] 为了防止组件使用todos.length报错
      todos: JSON.parse(localStorage.getItem('todos')) || [
        {id: '001', title: '吃饭', completed: true},
        {id: '002', title: '学习', completed: false},
        {id: '003', title: '睡觉', completed: true}
      ]
    }
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //  勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
      })
    },
    delTodo(id) {
      //过滤掉不想要的
      //filter不改变数组，要重新赋值
      this.todos = this.todos.filter(item => item.id !== id)
    },
    // 全选or取消全选
    checkAllTodo(flag) {
      this.todos.forEach(item => {
        item.completed = flag
      })
    },
    //清空已经完成的todo
    handleClear() {
      if (confirm('确定清除已完成任务吗？')) {
        this.todos = this.todos.filter(item => !item.completed)
      }
    }
  },
  watch: {
    //监听todos的变化
    //todo发生变化，value就是最新的todos
    todos: {
      deep: true,
      handler(newValue) {
        //将todos存储到本地
        localStorage.setItem('todos', JSON.stringify(newValue))
      }
    }
  },
  mounted() {
    this.$globalEventBus.$on('check-to-do', this.checkTodo)
    this.$globalEventBus.$on('del-to-do', this.delTodo)
  },
  beforeDestroy() {
    this.$globalEventBus.$off('check-to-do')
    this.$globalEventBus.$off('del-to-do')
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style scoped>
/*base*/
* {
  margin: 0;
}

body {
  background: #fff;

}


.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>