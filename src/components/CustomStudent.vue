<template>
  <div>
    <p>学生姓名：{{ studentName }}</p>
    <p>学生年龄：{{ studentAge }}</p>
    <button @click="sendStudentName">把学生名称传给父组件</button>
    <button @click="unbind">解绑custom-event事件</button>
    <button @click="death">销毁当前student组件实例对象(vc)</button>
    <button @click="sendStudentNameToBrother">把学生姓名通过事件总线传给兄弟组件</button>
  </div>
</template>

<script>
export default {
  name: "CustomStudent",
  data() {
    return {
      studentName: "张三",
      studentAge: 18,
      number: 66
    }
  },
  methods: {
    sendStudentName() {
      //触发CustomStudent组件实例身上的自定义事件custom-event
      this.$emit('custom-event', this.studentName, 66, 88)
      // this.$emit('demo')

    },
    unbind() {
      this.$off('custom-event')
      //  解绑多个自定义事件
      // this.$off(['custom-event', 'demo'])
      //解绑所有自定义事件
      // this.$off()
    },
    death(){
      // 销毁当前student组件实例对象(vc)
      //销毁后所有Student实例的自定义事件不奏效
      //原生dom事件不受影响
      this.$destroy()
    },
    sendStudentNameToBrother(){
        this.$globalEventBus.$emit('get-student-name',this.studentName)
    }
  }

}
</script>

<style scoped>

</style>