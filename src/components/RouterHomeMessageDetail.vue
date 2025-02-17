<template>
    <ul>
      <li>消息编号:{{id}}</li>
      <li>消息标题:{{title}}</li>
      <p>{{id}}---{{title}}</p>
    </ul>
</template>

<script>
export default {
  name: "RouterHomeMessageDetail",
  props:['id','title'],
  mounted() {
    console.log(this.$route)
  },
  computed:{
  }
}
</script>

<style scoped>
ul li{
  text-align: left;
}
</style>