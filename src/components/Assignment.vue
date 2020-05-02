<template>
  <div class="assignment-page">
    <h2>{{ this.name }}</h2>
    <div class="assignment-box">
      <div class="assignment-box-inner">
        <h3>{{ title }}</h3>
        <p v-html="text"></p>
      </div>
    </div>
  </div>
</template>

<script>
const {
  allowedToView,
  markAsStarted,
} = require("../fn/assignment-state").default;
const { logOpened } = require("../fn/logger").default;
const assignments = require("../assets/assignments.json");

const findAssignment = (id) => {
  return assignments.find((a) => {
    return a.id === id;
  });
};

export default {
  name: "Assignment",
  data: function() {
    return {
      name: this.$route.query.name,
      id: this.$route.params.id,
      title: findAssignment(this.$route.params.id).title,
      text: findAssignment(this.$route.params.id).assignment,
      timelimit: findAssignment(this.$route.params.id).timelimit,
    };
  },
  created: function() {
    console.log("Got id " + this.id);
    logOpened(this.$http, this.name, this.id);
    if (allowedToView(this.$cookies, this.id, this.timelimit).allowed) {
      markAsStarted(this.$cookies, this.id);
    } else {
      this.$router.push({ path: "/preparations", query: this.$route.query });
    }
    /*
    const prevData = this.$cookies.get(this.id);
    const now = Date.now();

    if (prevData) {
      console.log("Saved data: ", prevData);
      const timeLeft = prevData.timestamp + this.timelimit - now;
      if (timeLeft < 0) {
      } else {
        console.log("Still time left: " + timeLeft / 1000);
      }
    } else {
      const data = { timestamp: now };
      console.log("Sets timestamp");
      this.$cookies.set(this.id, JSON.stringify(data));
    }
    */
  },
};
</script>

<style>
.assignment-page {
  color: #ffffff;
}

.assignment-box {
  background-color: #ffffff;
  width: 100%;
  color: #000000;
}

.assignment-box-inner {
  padding: 20px;
}

p {
  font-size: 18pt;
}

ul {
  text-align: left;
}

button {
  background: #88b688;
}
</style>
