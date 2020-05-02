<template>
  <div class="prepare-page">
    <h2>{{ this.name }}</h2>
    <div class="prepare-box">
      <div class="prepare-box-inner">
        <p>Tillåtet matieral:</p>
        <p v-html="preparations"></p>
        <button
          class="start-button"
          @click.prevent="startClicked()"
          v-bind:class="[hideStartButton ? 'hidden' : '']"
        >
          {{ this.buttonText }}
        </button>
        <div
          class="already-done-text"
          v-bind:class="[hideStartButton ? '' : 'hidden']"
        >
          Du har redan startat denna utmaning
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { allowedToView } = require("../fn/assignment-state").default;
const { logViewed } = require("../fn/logger").default;
const assignments = require("../assets/assignments.json");

const assigment = assignments.find((a) => {
  return a.active === true;
});

export default {
  name: "Preparations",
  data: function() {
    return {
      hideStartButton: false,
      name: this.$route.query.name,
      id: assigment.id,
      timelimit: assigment.timelimit,
      preparations: assigment.preparations,
      buttonText: "Starta utmaningen",
    };
  },
  created: function() {
    logViewed(this.$http, this.name, this.id);
    const result = allowedToView(this.$cookies, this.id, this.timelimit);
    if (!result.allowed) {
      this.hideStartButton = true;
    } else {
      this.hideStartButton = false;

      console.log(result);
      if (result.started) {
        this.buttonText = "Fortsätt utmaningen";
      } else {
        this.buttonText = "Starta utmaningen";
      }
    }
  },

  methods: {
    startClicked: function() {
      const result = allowedToView(this.$cookies, this.id, this.timelimit);
      if (result.started) {
        this.$router.push({
          path: "/assignment/" + this.id,
          query: this.$route.query,
        });
      } else {
        const options = {
          html: true,
          okText: "Starta nu",
          cancelText: "Avbryt",
        };

        this.$dialog
          .confirm(
            '<h2>Vill du starta nu?</h2>Du kan bara starta utmaningen en gång. Tiden börjar när du trycker på "Starta nu"',
            options
          )
          .then((dialog) => {
            console.log(dialog);
            this.$router.push({
              path: "/assignment/" + this.id,
              query: this.$route.query,
            });
          })
          .catch(function() {
            console.log("Clicked on cancel");
          });
      }
    },
  },
};
</script>

<style>
.prepare-page {
  color: #ffffff;
}

.prepare-box {
  background-color: #ffffff;
  width: 100%;
  color: #000000;
}

.prepare-box-inner {
  padding: 20px;
}

p {
  font-size: 18pt;
}

ul {
  text-align: left;
}

.start-button {
  background: #88b688;
  font-size: 20pt;
  width: 90%;
  padding: 10px;
  border-radius: 4px;
}

.start-button.hidden {
  visibility: hidden;
}

.already-done-text {
  color: #bb3d3d;
}

.already-done-text.hidden {
  visibility: hidden;
}
</style>
