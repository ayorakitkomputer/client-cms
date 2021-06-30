import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ZingGrid from "zinggrid";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	ZingGrid,
	render: (h) => h(App),
}).$mount("#app");
