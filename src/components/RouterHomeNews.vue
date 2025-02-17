<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "RouterHomeNews",
  data() {
    return {
      opacity: 1
    }
  },
  activated() {
    console.log('news组件激活')
    this.timer = setInterval(() => {
      console.log("@")
      if (this.opacity <= 0) {
        this.opacity = 1
      } else {
        this.opacity -= 0.1
      }
    }, 100)
  },
  deactivated() {
    console.log('news组件失活')
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>