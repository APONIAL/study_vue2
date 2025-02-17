<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--active-class="active"实现点击高亮-->
          <router-link replace class="list-group-item " active-class="active" to="/chapter9/chapter9-about">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/chapter9/chapter9-home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--指定组件的呈现位置-->
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RouterContainer",
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
}
</script>

<style scoped>

</style>