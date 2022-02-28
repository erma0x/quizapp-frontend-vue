import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    redirect: "/home",
  }
];


const router = new VueRouter({
  routes,
});

export default router;