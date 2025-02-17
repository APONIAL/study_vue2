<template>
  <div>
    <h3>Home组件内容</h3>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
              class="list-group-item"
              active-class="active"
              to="/chapter9/chapter9-home/news"
          >News</router-link>
        </li>
        <li>
          <router-link
              class="list-group-item "
              active-class="active"
              :to="{name:'message'}"
          >Message</router-link>
        </li>
      </ul>
      <keep-alive :include="['RouterHomeNews','RouterHomeMessage']">
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "RouterHome",
  mounted() {
    console.log('home组件挂载完毕==>', this)
  }
}
</script>

<style scoped>
*{
  margin: 10px;
  padding: 0;
}

</style>