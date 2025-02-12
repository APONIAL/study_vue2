<template>
  <div>
    <!--    axios-->
    <div>
      <h3>axios跨域</h3>
      <button @click="getStudents">获取学生信息</button>
    </div>
    <!-- github user search-->
    <hr/>
    <div>
      <GitHubUsersContainer/>
    </div>
    <!-- slot插槽——具名插槽-->
    <hr/>
    <div>
      <h3>slot插槽</h3>
      <div class="slot">
        <Category title="美食">
          <img slot="center" src="../../public/img/ck.jpg" alt="">
          <a slot="footer" href="https://www.baidu.com">更多美食</a>
        </Category>
        <Category title="游戏" :listData="games">
          <ul slot="center">
            <li v-for="(item,index) in games"
                :key="index"
            >{{ item }}
            </li>
          </ul>
         <div slot="footer">
           <a href="https://www.baidu.com">单机游戏</a>
           <a href="https://www.baidu.com">网络游戏</a>
         </div>
        </Category>
        <Category title="电影">
          <video  slot="center"height="150" controls>
            <source src="../../public/video/cxk.mp4" type="video/mp4">
            您的浏览器不支持Video标签。
          </video>
          <template v-slot:footer>
            <div >
              <a href="https://www.baidu.com">经典</a>
              <a href="https://www.baidu.com">热门</a>
              <a href="https://www.baidu.com">推荐</a>
            </div>
            <h5 >欢迎前来观影</h5>
          </template>
        </Category>
      </div>
    </div>

    <!-- slot插槽——作用域插槽-->
    <hr/>
    <div>
      <h3>slot插槽——作用域插槽</h3>
      <div class="slot">
        <CategoryScope title="游戏" >
          <template v-slot="{gamesScope}">
            <ul>
              <li v-for="(item,index) in gamesScope" :key="index">{{ item }}</li>
            </ul>
          </template>
        </CategoryScope>
        <CategoryScope title="游戏" >
          <template v-slot="tao">
            <ol>
              <li v-for="(item,index) in tao.gamesScope" :key="index">{{ item }}</li>
            </ol>
          </template>
        </CategoryScope>
        <CategoryScope title="游戏" >
          <template v-slot="tao">
            <ul>
              <h4 v-for="(item,index) in tao.gamesScope" :key="index">{{ item }}</h4>
            </ul>
          </template>
        </CategoryScope>

      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import GitHubUsersContainer from "@/components/GitHubUsersContainer";
import Category from "@/components/Category";
import CategoryScope from "@/components/CategoryScope";

export default {
  name: "chapter7",
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['英雄联盟', '穿越火线', 'DOTA2', '王者荣耀'],
      films: ['《战狼》', '《战狼2》', '《战狼3》', '《战狼4》'],
    }
  },
  methods: {
    getStudents() {
      axios.get('http://192.168.0.105:9000/api/students')
          .then(response => {
            console.log('请求成功', response.data)
          })
          .catch(error => {
            console.log('请求失败', error.message)
          })
    }
  },
  components: {
    GitHubUsersContainer,
    Category,
    CategoryScope,
  }
}
</script>

<style scoped>
/*居中*/
.slot {
  display: inline flex;
  justify-content: center;
}
</style>