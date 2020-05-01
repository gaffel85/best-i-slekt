// App.vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const { resetAssignment } = require("./fn/assignment-state").default;

const getUserName = (router, cookies) => {
  const cookieUser = cookies.get("username");
  return cookieUser;
};

const checkResetAssignment = (router, cookies) => {
  if (!router.query) return;
  const assingementId = router.query.reset;
  resetAssignment(cookies, assingementId);
};

export default {
  created: function() {
    checkResetAssignment(this.$route, this.$cookies);
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
  margin: 0px;
  padding: 0px;
  background: #2a557b;
}
</style>
