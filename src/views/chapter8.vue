<template>
  <div>
    <!--vuex——计数器原始实现-->
    <div>
      <hr/>
      <h3>计数器-vue实现</h3>
      <CountOrigin/>
    </div>
    <!--vuex——使用vuex实现-->
    <div>
      <hr/>
      <h3>计数器-vuex实现</h3>
      <CountVuex/>
    </div>
  </div>
</template>

<script>
import CountOrigin from "@/components/CountOrigin";
import CountVuex from "@/components/CountVuex";
export default {
  name: "chapter8",
  data() {
    return {}
  },
  components: {
    CountOrigin,
    CountVuex,
  },
}
</script>

<style scoped>

</style>