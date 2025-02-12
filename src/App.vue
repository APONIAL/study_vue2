<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
        <router-link to="/about">chapter1</router-link>
        <router-link to="/chapter2">chapter2</router-link>
        <router-link to="/chapter3">chapter3</router-link>
        <router-link to="/chapter4">chapter4</router-link>
        <router-link to="/chapter5">chapter5</router-link>
        <router-link to="/chapter6">chapter6</router-link>
        <div style="margin-top: 20px">
          <router-link to="/chapter7">chapter7</router-link>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  font-size: large;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
