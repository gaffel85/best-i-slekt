import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";
import Assignment from "./components/Assignment.vue";

Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: "UA-165112716-1",
});
Vue.use(VueRouter);

const routes = [{ path: "/assignment", component: Assignment }];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (createEle) => createEle(App),
}).$mount("#app");
