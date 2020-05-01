<template>
  <div>
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
export default {
  name: "Assignment",
  props: {
    prepars: String,
    assignment: String,
  },
  data: function() {
    return {
      name: this.$route.query.name,
    };
  },
};
</script>

<style>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
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
