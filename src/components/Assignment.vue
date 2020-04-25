<template>
  <div class="card">
    <div class="card-inner" v-bind:class="[isOpen ? 'isClicked' : '']" @click="toggleClicked()">
      <div class="card-front">
        <p>Tillåtet matieral:</p>
        <ul>
          <li>3 A4-ark (skrivarpapper eller från collegieblock, ej tjockare)</li>
          <li>1 sax</li>
          <li>1 penna</li>
        </ul>
        <h3>Tryck för att börja utmaningen</h3>
      </div>
      <div class="card-back">
        <h3>Långt papper</h3>
        <p>Gör en så lång skapelse som möjligt av dessa material. Skapelsen får bara bestå av en sorts material. Längst skapelse vinner.</p>
        <p>Du har 5 minuter på dig. Din tid börjar NU!</p>
        <p>PS. Skapelsen måste ha kontakt med alla delar av sig själv och kunna flyttas i ett stycke</p>
        <p>
          <b>När du är nöjd:</b>
          Mät skapelsen på längden.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: {
    prepars: String,
    assignment: String
  },
  data: function() {
    return {
      isOpen: false
    };
  },

  methods: {
    toggleClicked: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.card {
  background-color: transparent;
  margin: auto;
  width: 80%;
  height: 600px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

.card.hidden {
  visibility: hidden;
}

/* This container is needed to position the front and back side */
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.card-inner.isClicked {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border: 1px solid #000;
}

/* Style the front side (fallback if image is missing) */
.card-front {
  background: #ffffff;
  color: black;
}

/* Style the back side */
.card-back {
  background-color: #ffffff;
  color: #000000;
  transform: rotateY(180deg);
  padding: 20px;
}

p {
  font-size: 18pt;
}

ul {
  text-align: left;
}
</style>
