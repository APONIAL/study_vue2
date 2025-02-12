<template>
  <div class="container">
    <GitHubSearch/>
    <GitHubList/>
  </div>

</template>

<script>
import GitHubSearch from '@/components/GitHubUsersSearch.vue'
import GitHubList from '@/components/GitHubUsersList.vue'

export default {
  name: "GitHubContainer",
  components: {
    GitHubSearch,
    GitHubList
  }
}
</script>
<style scoped>

</style>