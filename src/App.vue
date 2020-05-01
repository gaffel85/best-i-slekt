// App.vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const getUserName = (router, cookies) => {
  const paramUser = getQueryName(router);
  const cookieUser = cookies.get("username");
  if (paramUser) {
    cookies.remove("username");
    return paramUser;
  } else {
    return cookieUser;
  }
};

const getQueryName = (router) => {
  if (!router.query) return null;
  return router.query.name;
};

export default {
  created: function() {
    const username = getUserName(this.$route, this.$cookies);
    if (username) {
      this.$router.push({ path: "/preparations", query: { name: username } });
    } else {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin: 0px;
  padding: 0px;
  background: #2a557b;
}
</style>
