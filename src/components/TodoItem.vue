<template>
  <li>
    <label>
      <!-- input标签动态拥有checked属性 true则添加属性，false则不添加-->
      <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
      <!-- 如下代码也能实现功能，但是不推荐使用，因为修改了props，但是vue没监测到-->
      <!-- <input type="checkbox" v-model="todo.completed"/>-->
      <span class="ml5">{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ['todo'],
  methods: {
    handleCheck(id) {
      //通知TodoContainer(父组件的父组件)组件将对应的todo对象的
      //completed属性值取反
      this.$globalEventBus.$emit('check-to-do', id)
    },
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
       this.$globalEventBus.$emit('del-to-do', id)
      }
    }
  },

}
</script>
<style src="../assets/button.css" scoped></style>
<style scoped>
* {
  margin: 0;
}

.ml5 {
  margin-left: 5px;
}

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}


li label {
  float: left;
  cursor: pointer;
}

li label input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
}

li label span {
  margin-top: 2px;
}

li button {
  float: right;
  margin-top: 3px;
}

.btn {
  display: none;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}
</style>
