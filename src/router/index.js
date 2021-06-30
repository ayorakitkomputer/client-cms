import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Transactions.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/cpu",
		name: "Cpu",
		component: () => import("../views/Products.vue"),
	},
	{
		path: "/motherboard",
		name: "Motherboard",
		component: () => import("../views/Products.vue"),
	},
	{
		path: "/memory",
		name: "Memory",
		component: () => import("../views/Products.vue"),
	},
	{
		path: "/storages",
		name: "Storage",
		component: () => import("../views/Products.vue"),
	},
	{
		path: "/gpu",
		name: "Gpu",
		component: () => import("../views/Products.vue"),
	},
	{
		path: "/case",
		name: "Case",
		component: () => import("../views/Products.vue"),
	},
	{
		path: "/power_supplies",
		name: "Power Supply",
		component: () => import("../views/Products.vue"),
	},
	{
		path: "/monitors",
		name: "Monitor",
		component: () => import("../views/Products.vue"),
	},
	{
		path: "/case_fan",
		name: "Case Fan",
		component: () => import("../views/Products.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.name === "Login" && localStorage.access_token) next(false);
	else if (to.name !== "Login" && !localStorage.access_token) next({ name: "Login" });
	else next();
});

export default router;
