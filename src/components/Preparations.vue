<template>
  <div class="prepare-page">
    <h2>{{ this.name }}</h2>
    <div class="prepare-box">
      <div class="prepare-box-inner">
        <p>Tillåtet matieral:</p>
        <ul>
          <li>
            3 A4-ark (skrivarpapper eller från collegieblock, ej tjockare)
          </li>
          <li>1 sax</li>
          <li>1 penna</li>
        </ul>
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

export default {
  name: "Preparations",
  props: {
    prepars: String,
    assignment: String,
  },
  data: function() {
    return {
      hideStartButton: false,
      name: this.$route.query.name,
      id: "long-paper",
      timelimit: 1000 * 60,
      buttonText: "Starta utmaningen",
    };
  },
  created: function() {
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
          path: "/assignment",
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
              path: "/assignment",
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
