<template>
  <div class="assignment-page">
    <h2>{{ this.name }}</h2>
    <div class="assignment-box">
      <div class="assignment-box-inner">
        <h3>Långt papper</h3>
        <p>
          Gör en så lång skapelse som möjligt av dessa material. Skapelsen får
          bara bestå av en sorts material. Längst skapelse vinner.
        </p>
        <p>Du har 5 minuter på dig. Din tid börjar NU!</p>
        <p>
          PS. Skapelsen måste ha kontakt med alla delar av sig själv och kunna
          flyttas i ett stycke
        </p>
        <p>
          <b>När du är nöjd:</b>
          Mät skapelsen på längden.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const {
  allowedToView,
  markAsStarted,
} = require("../fn/assignment-state").default;

export default {
  name: "Assignment",
  props: {
    prepars: String,
    assignment: String,
  },
  data: function() {
    return {
      name: this.$route.query.name,
      id: "long-paper",
      timelimit: 1000 * 60,
    };
  },
  created: function() {
    if (allowedToView(this.$cookies, this.id, this.timelimit)) {
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
