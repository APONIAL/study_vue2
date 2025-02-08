<template>
  <div>

    <p>学生姓名是：{{studentName}}</p>
    <!--通过父组件给子组件传递函数类型的props实现子组件向父组件传值-->
    <CustomSchool :getSchoolName="getSchoolName"/>
    <!--给CustomStudent组件的实例对象vc绑定一个自定义事件custom-event，该事件触发时，
    会执行getStudentName函数，实现子组件向父组件传值 这种方式并没有把getStudentName()方法直接交给
    组件去调用-->
<!--   <CustomStudent v-on:custom-event="getStudentName" @demo="m1"/>-->
    <!--另一种方式 通过this.$refs.student获取子组件实例对象student，
          再通过student.getStudentName()调用-->
<!--    传递原生click事件-->
<!--    <CustomStudent ref="student" @click.native="show"/>-->
    <CustomStudent ref="student"/>
  </div>
</template>

<script>
import CustomStudent from "@/components/CustomStudent";
import CustomSchool from "@/components/CustomSchool";

export default {
  name: "CustomParent",
  components: {
    CustomStudent,
    CustomSchool
  },
  data() {
    return {
      studentName:''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('CustomParent 接收到了来自 CustomSchool 的数据：', name)
    },
    getStudentName(name,...args) {
      console.log('CustomParent 接收到了来自 CustomStudent 的数据：', name,args)
      this.studentName = name

    },
    m1(){
      console.log('demo事件被触发')
    },
    show(){
      alert('123')
    }

  },

  mounted() {
    //仅能触发一次
    this.$refs.student.$on('custom-event', this.getStudentName)
    // this.$refs.student.$on('custom-event',  (name,args) =>{
    //   console.log('CustomParent 接收到了来自 CustomStudent 的数据：', name,args)
    //   this.studentName = name
    //   console.log('this=>',this)
    // })
  }
}
</script>

<style scoped>

</style>