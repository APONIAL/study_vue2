<template>
<!--  total不为0时转过来的bool值为真，则显示-->
  <div class="todo-footer" v-show="total">
    <label>
<!--  <input type="checkbox" :checked = "isAll" @change = "handleCheckAll"/>-->
<!--      输入的初始值要展示，并且以后还要有交互，-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
<!--      已完成需要统计，故要用到计算属性-->
          <span>已完成{{doneTotal}}</span> / 全部{{ total }}
        </span>
    <button class="btn btn-danger" @click="handleClear">清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "TodoFooter",
  props: ['todos','checkAllTodo','handleClear'],
  computed: {
    isAll:{
      get() {
        //如果全部都勾选了，则isAll为true
        return this.todos.every(item => item.completed)
      },
      // value是修改后的值
      set(value) {
          // console.log(newValue) true || false
        this.checkAllTodo(value)
      }
    },
    total() {
      return this.todos.length
    },
    //显示已完成的数量
    doneTotal() {
      // return this.todos.filter(item => item.completed).length
      //preValue是上一次计算的返回值，current是当前值，preValue初始值为0
     /* return this.todos.reduce((preValue, current) => {
        if (current.completed) {
          preValue++
        }
        return preValue
      }, 0)*/
      return this.todos.reduce ((preValue, todo) =>
          preValue + (todo.completed ? 1 : 0), 0)
    }
  },
  methods: {
  /*  handleCheckAll(e) {
      //获取勾选状态
      // console.log(e.target.checked)
      this.checkAllTodo(e.target.checked)
    }*/
  }

}
</script>
<style src="../assets/button.css" scoped></style>
<style scoped>
/*footer*/
* {
  margin: 0px;
}


.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 20px;
  text-align: left;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>