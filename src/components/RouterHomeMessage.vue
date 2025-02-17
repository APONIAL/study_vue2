<template>
  <div >
    <ul >
      <!--ul中有一堆li，就给li上面加上v-for-->
      <li v-for="m in messageList" :key="m.id">
        <!--``为模板字符串拼接，${}为变量-->
        <!--跳转路由并携带query参数-->
     <!--   <router-link
            :to="`/chapter9/chapter9-home/message/detail?id=${m.id}&title=${m.title}`"
        >{{m.title}}</router-link>&nbsp;&nbsp;-->
        <!--跳转路由，to的对象写法-->
        <router-link
            :to="{
              name: 'xiangqing',
              query: {
                id: m.id,
                hello: m.title
              }
            }"
        >{{m.title}}</router-link>
<!--        <router-link
            :to="`/chapter9/chapter9-home/message/detail/${m.id}/${m.title}`"
        >{{m.title}}</router-link>-->
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr/>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "RouterHomeMessage",
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  },
  methods:{
    pushShow(m){
      this.$router.push({
        name: 'xiangqing',
        query: {
          id: m.id,
          hello: m.title
        }
      })
    },

    replaceShow(m){
      this.$router.replace({
        name: 'xiangqing',
        query: {
          id: m.id,
          hello: m.title
        }
      }).catch((err)=>{
         alert('请勿重复点击')
      })
    }
  }
}
</script>

<style scoped>
ul li{
  text-align: left;
}
button{
/*   水平排列*/
  display: inline-block;
  margin-left: 5px;
}
</style>