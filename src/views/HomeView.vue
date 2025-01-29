<template >
  <div class="home">
    <HelloWorld msg="hello word"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
