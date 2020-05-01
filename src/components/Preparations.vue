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
        <button class="start-button" @click.prevent="startClicked()">
          Starta utmaningen
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preparations",
  props: {
    prepars: String,
    assignment: String,
  },
  data: function() {
    return {
      name: this.$route.query.name,
    };
  },

  methods: {
    startClicked: function() {
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
          this.$router.push({ path: "/assignment", query: this.$route.query });
        })
        .catch(function() {
          console.log("Clicked on cancel");
        });
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
</style>
