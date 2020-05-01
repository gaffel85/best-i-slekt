<template>
  <div>
    <form>
      <div class="form-input">Namn:</div>
      <input type="text" v-model="name" />
      <button class="login-button" @click.prevent="doneClicked()">Klar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      name: this.$cookies.get("username"),
    };
  },

  methods: {
    doneClicked: function() {
      this.$cookies.set("username", this.name);
      this.$router.push("/preparations");
    },
  },
};
</script>

<style>
form {
  margin: 20px 0px;
  padding: 0px;
}
.form-input {
  font-size: 22pt;
  font-weight: bold;
  color: #ffffff;
}
input {
  padding: 12px 20px;
  margin: 8px 0;
  font-size: 20pt;
  width: 90%;
  max-width: 400px;
  box-sizing: border-box;
}
select {
  padding: 16px 20px;
  font-size: 20pt;
}
.login-button {
  font-size: 20pt;
  background: #dadce1;
  width: 90%;
  padding: 10px;
  border-radius: 4px;
}
</style>
