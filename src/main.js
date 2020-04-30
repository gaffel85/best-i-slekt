import Vue from "vue";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: "UA-165112716-1",
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
