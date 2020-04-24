<template>
  <div id="app">
    <h1>Dagens uppgift</h1>
    <Assignment />
  </div>
</template>

<script>
import Assignment from "./components/Assignment.vue";
export default {
  name: "app",
  components: {
    Assignment
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
}
body {
  background: #2a557b;
}
</style>