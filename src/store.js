import Vue from "vue";
import Vuex from "vuex";
import routedata from "@/vuex-cache/route-save.js";
// import personer from "@/vuex-cache/personer.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    routedata: routedata,
    // personer: personer,
  }
});
