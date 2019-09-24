<template>
  <div id="app">
    <div id="nav">
      <div class="pure-menu pure-menu-horizontal">
        <router-link class="pure-menu-heading pure-menu-link" to="/">Home</router-link>
        <router-link class="pure-menu-heading pure-menu-link" to="/about">About</router-link>
      </div>
      <router-link class="pure-menu-heading pure-menu-link" to="/login">Login</router-link>
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin: 20px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  width: 100%;
}
/* 
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px;
  padding-right: 10px;
}
*/
#nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
