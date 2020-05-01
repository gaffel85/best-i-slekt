<template>
  <div>
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
        <button @click.prevent="startClicked()">Starta utmaningen</button>
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
      this.$router.push({ path: "/assignment", query: this.$route.query });
    },
  },
};
</script>

<style>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
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

button {
  background: #88b688;
}
</style>
