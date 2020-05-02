import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";
import VuejsDialog from "vuejs-dialog";
import Assignment from "./components/Assignment.vue";
import Login from "./components/Login.vue";
import Preparations from "./components/Preparations.vue";
import "vuejs-dialog/dist/vuejs-dialog.min.css";
import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(VueRouter);
Vue.use(VuejsDialog);

Vue.$cookies.config("365d");

const routes = [
  { path: "/assignment", component: Assignment },
  { path: "/login", component: Login },
  { path: "/preparations", component: Preparations },
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
