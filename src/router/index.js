import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

Vue.component(
  "frontPageHello",
  require("../components/frontPageHello.vue").default
);

Vue.component(
  "portfolioProjects",
  require("../components/portfolioProjects.vue").default
);

Vue.component("appFooter", require("../components/appFooter.vue").default);

Vue.component(
  "contactSection",
  require("../components/contactSection.vue").default
);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
