<template>
  <div>
    <p>学生姓名：{{ studentName }}</p>
    <p>学生年龄：{{ d_age + 1 }}</p>
    <p @click="showMixin" >mixin:{{ mix }}</p>
    <button @click="updateStudentAge" v-if="isTrue">尝试修改student-age</button>
    <!--      <h3>组建嵌套</h3>-->
    <!--      <School />-->
  </div>
</template>

<script>
import School from '@/components/School'
//局部引入混合
import {mixin} from'@/mixin'
export default {
  name: "Student",
  data() {
    return {
      d_age: this.studentAge,
      mix: 11
    }
  },
  mixins: [mixin],
  props: {
    studentName: {
      type: String,
      required: true
    },
    studentAge: {
      type: Number,
      default: 18
    },
    isTrue:{
      type: Boolean,
      default: true
    }

  }, methods: {
    updateStudentAge() {
      // this.$emit('update:studentAge',this.studentAge+1)
      this.d_age++;
    },

  },
  components: {
    School
  },


}
</script>

<style scoped>

</style>