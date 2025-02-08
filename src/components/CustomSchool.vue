<template>
  <div>
    <p>学校名字：{{ schoolName }}</p>
    <p>学校地址：{{ schoolCity }}</p>
    <button @click="sendSchoolName">把学校名字传给父组件</button>
    <button @click="unbindCallBack2">解绑监听器2</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: "CustomSchool",
  props: ['getSchoolName'],
  data() {
    return {
      schoolName: "盐工",
      schoolCity: "江苏"
    }
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.schoolName)
    },
    printStudentName(name) {
      console.log('监听器2：CustomSchool 接收到了来自 CustomStudent 的数据：', name)
    },
    unbindCallBack2() {
      /*      this.$globalEventBus.$off('get-student-name',(name)=>{
              console.log('CustomSchool 接收到了来自 CustomStudent 的数据：', name)
            })*/
      this.$globalEventBus.$off('get-student-name', this.printStudentName)
    }
  },
  mounted() {
    this.$globalEventBus.$on('get-student-name', (name) => {
      console.log('监听器1：CustomSchool 接收到了来自 CustomStudent 的数据：', name)
    })
    this.$globalEventBus.$on('get-student-name', this.printStudentName)
    this.Pid = PubSub.subscribe('get-student-name-pubSub', (msgName,data) => {
      console.log('this=>',this)
      console.log('PubSub: CustomSchool 接收到了来自 CustomStudent 的数据：', msgName,data)
    })
  },
  beforeDestroy() {
    this.$globalEventBus.$off('get-student-name')
    PubSub.unsubscribe(this.Pid)
  }
}
</script>

<style scoped>

</style>