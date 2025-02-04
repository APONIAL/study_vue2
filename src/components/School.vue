<template>
    <div>
        <p>学校名字：{{schoolName}}</p>
        <p>学校地址：{{schoolCity}}</p>
        <p @click="showMixin">mixin:{{mix}}</p>
<!--      <button @click="outX">输出x</button>-->
<!--        <h3>组建嵌套</h3>-->
<!--        <Student />-->
    </div>
</template>

<script>
import {mixin} from "@/mixin";

export default {
  name: "School",
  data() {
    return {
      schoolName: "ycit",
      schoolCity: "江苏",
      mix:1
    }
  },
  mixins:[mixin],
  methods:{
    outX(){
      console.log(this.x)
      // console.log(this)
    },
  },
}
</script>

<style scoped>

</style>