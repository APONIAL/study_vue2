<template>
  <div class="row">
    <!--展示用户列表-->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src='user.avatar_url' style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!--  展示欢迎词-->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!--  展示加载中-->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!--  展示错误信息-->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>

  </div>
</template>

<script>
export default {
  name: "GitHubList",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: ''
      }
    }
  },
  computed: {
    users() {
      return this.info.users
    },
    isFirst() {
    }
  },
  mounted() {
    this.$globalEventBus.$on('update-list-data', (dataObj) => {
      //批量更新数据
      //这种写法会丢失isFirst
      // this.info = dataObj
      //使用es6扩展运算符
      //将对象展开为键值对。在语法层面展开数据，进行对比合并，
      // 如果数据有相同的键，则后面的会覆盖前面的。没说则不覆盖
      this.info = {...this.info, ...dataObj}
      console.log("userList中接收到了数据=>", dataObj)
    })
  }

}
</script>

<style scoped>
* {
  margin: 0;
}

.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>