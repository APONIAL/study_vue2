<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyword"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "GitHubSearch",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchUsers() {
      //1.获取用户输入的关键字
      const key = this.keyword.trim()
      // 2.如果用户没有输入关键字，则不进行搜索
      if (!key) {
        alert('请输入关键字')
        return
      }
      //请求前更新List数据
      this.$globalEventBus.$emit('update-list-data', {isFirst: false, isLoading: true, errMsg: '', users: []})
      //3.如果用户输入了关键字，则发送请求
      axios.get(`https://api.github.com/search/users?q=${this.key}`)
          .then(res => {
            //4.将搜索结果传递给GitHubContainer组件
            console.log('请求成功=>', res.data.items)
            //请求成功后更新List数据
            this.$globalEventBus.$emit('update-list-data', {isLoading: false, errMsg: '', users: res.data.items})
          }, err => {
            console.log('请求失败=>', err)
            //请求失败后更新List数据
            this.$globalEventBus.$emit('update-list-data', {isLoading: false, errMsg: err.message, users: []})
          })
    }
  }
}
</script>

<style scoped>

</style>