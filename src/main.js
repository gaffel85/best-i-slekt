import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";
import Assignment from "./components/Assignment.vue";
import Login from "./components/Login.vue";

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(VueRouter);

Vue.$cookies.config("365d");

const routes = [
  { path: "/assignment", component: Assignment },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  routes,
});

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: "UA-165112716-1",
  router,
});

new Vue({
  router,
  render: (createEle) => createEle(App),
}).$mount("#app");
