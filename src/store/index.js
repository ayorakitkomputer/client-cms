import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		login(context, payload) {
			return axios({
				url: "/login",
				method: "POST",
				data: payload,
			});
		},
	},
	modules: {},
});
