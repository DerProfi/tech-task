import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/Form.vue";
import Results from "../views/Results.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Form",
    component: Form,
    props: true,
  },
  {
    path: "/results/:username",
    name: "Results",
    component: Results,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
