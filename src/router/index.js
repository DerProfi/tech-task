import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Form",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
