import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/storages",
    name: "Storages",
    component: () => import("../views/Product"),
  },
  {
    path: "/cpu",
    name: "Cpu",
    component: () => import("../views/Product"),
  },
  {
    path: "/power-supplies",
    name: "Power-supplies",
    component: () => import("../views/Product"),
  },
  {
    path: "/monitors",
    name: "Monitors",
    component: () => import("../views/Product"),
  },
  {
    path: "/gpu",
    name: "Gpu",
    component: () => import("../views/Product"),
  },
  {
    path: "/motherboard",
    name: "Motherboard",
    component: () => import("../views/Product"),
  },
  {
    path: "/case",
    name: "Case",
    component: () => import("../views/Product"),
  },
  {
    path: "/memory",
    name: "Memory",
    component: () => import("../views/Product"),
  },
  {
    path: "/caseFan",
    name: "CaseFan",
    component: () => import("../views/Product"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
