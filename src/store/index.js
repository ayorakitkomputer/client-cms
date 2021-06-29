import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api";
import {
  fetchProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from "../helpers/crudProduct";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cpu: [],
    storage: [],
    powerSupplies: [],
    monitor: [],
    gpu: [],
    motherboard: [],
    case: [],
    memory: [],
    caseFan: [],
    productPage: "",
  },
  mutations: {
    SET_CPU(state, newData) {
      state.cpu = newData;
    },
    SET_STORAGE(state, newData) {
      state.storage = newData;
    },
    SET_POWER_SUPPLIES(state, newData) {
      state.powerSupplies = newData;
    },
    SET_MONITOR(state, newData) {
      state.monitor = newData;
    },
    SET_GPU(state, newData) {
      state.gpu = newData;
    },
    SET_MOTHERBOARD(state, newData) {
      state.motherboard = newData;
    },
    SET_CASE(state, newData) {
      state.case = newData;
    },
    SET_MEMORY(state, newData) {
      state.memory = newData;
    },
    SET_CASE_FAN(state, newData) {
      state.caseFan = newData;
    },
    SET_BUILD(state, newData) {
      state.build = newData;
    },
    SET_HISTORY(state, newData) {
      state.history = newData;
    },
    SET_PRODUCT_PAGE(state, newData) {
      state.productPage = newData;
    },
  },
  actions: {
    login(context, userData) {
      return axios({
        url: "/login",
        method: "POST",
        data: userData,
      });
    },
    fetchCpu({ commit }) {
      fetchProduct(commit, "/cpu", "SET_CPU");
    },
    fetchStorage({ commit }) {
      axios({
        url: "/storages",
        method: "GET",
      })
        .then(({ data }) => {
          console.log(data, "storage fetch data");
          commit("SET_STORAGE", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchPowerSupplies({ commit }) {
      axios({
        url: "/power-supplies",
        method: "GET",
      })
        .then(({ data }) => {
          commit("SET_POWER_SUPPLIES", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchMonitor({ commit }) {
      axios({
        url: "/monitors",
        method: "GET",
      })
        .then(({ data }) => {
          commit("SET_MONITOR", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchGpu({ commit }) {
      axios({
        url: "/gpu",
        method: "GET",
      })
        .then(({ data }) => {
          commit("SET_GPU", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchMotherboard({ commit }) {
      axios({
        url: "/motherboard",
        method: "GET",
      })
        .then(({ data }) => {
          commit("SET_MOTHERBOARD", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCase({ commit }) {
      axios({
        url: "/case",
        method: "GET",
      })
        .then(({ data }) => {
          commit("SET_CASE", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchMemory({ commit }) {
      axios({
        url: "/memory",
        method: "GET",
      })
        .then(({ data }) => {
          commit("SET_MEMORY", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCaseFan({ commit }) {
      axios({
        url: "/caseFan",
        method: "GET",
      })
        .then(({ data }) => {
          commit("SET_CASE_FAN", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
