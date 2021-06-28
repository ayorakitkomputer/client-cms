import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer");

// Views
const Dashboard = () => import("@/views/Dashboard");
const Add = () => import("@/views/component/Add");

// Views - Components
const CPU = () => import("@/views/component/CPU");
const Motherboard = () => import("@/views/component/Motherboard");
const Memory = () => import("@/views/component/Memory");
const Storage = () => import("@/views/component/Storage");
const GPU = () => import("@/views/component/GPU");
const Case = () => import("@/views/component/Case");
const PowerSupply = () => import("@/views/component/PowerSupply");
const Monitor = () => import("@/views/component/Monitor");

const Chat = () => import("@/views/chat/LiveChat");

// Views - Pages
const Login = () => import("@/views/account/Login");
const Register = () => import("@/views/account/Register");

Vue.use(Router);

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/dashboard",
      name: "Admin",
      component: TheContainer,
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,
        },
        {
          path: "create",
          name: "Add",
          component: Add,
        },
        {
          path: "chat",
          name: "Chat",
          component: Chat,
        },
        {
          path: "component",
          redirect: "/component/cpu",
          name: "Component",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "cpu",
              name: "CPU",
              component: CPU,
            },
            {
              path: "motherboard",
              name: "Motherboard",
              component: Motherboard,
            },
            {
              path: "memory",
              name: "Memory",
              component: Memory,
            },
            {
              path: "storage",
              name: "Storage",
              component: Storage,
            },
            {
              path: "gpu",
              name: "GPU",
              component: GPU,
            },
            {
              path: "case",
              name: "Case",
              component: Case,
            },
            {
              path: "powersupply",
              name: "PowerSupply",
              component: PowerSupply,
            },
            {
              path: "monitor",
              name: "Monitor",
              component: Monitor,
            },
          ],
        },
      ],
    },
    {
      path: "/account",
      name: "Account",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "login",
          name: "Login",
          component: Login,
        },
        {
          path: "register",
          name: "Register",
          component: Register,
        },
      ],
    },
  ];
}
