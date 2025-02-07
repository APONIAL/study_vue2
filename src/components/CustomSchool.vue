<template>
    <div>
        <p>学校名字：{{schoolName}}</p>
        <p>学校地址：{{schoolCity}}</p>
       <button @click="sendSchoolName">把学校名字传给父组件</button>
    </div>
</template>

<script>
export default {
  name: "CustomSchool",
  props:['getSchoolName'],
  data() {
    return {
      schoolName: "盐工",
      schoolCity: "江苏"
    }
  },
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.schoolName)
    }
  }
}
</script>

<style scoped>

</style>