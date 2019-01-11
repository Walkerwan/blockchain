import { homepageList } from "@/constant.js";

export default {
    namespaced: true,
    state: {
        routeList: homepageList,
    },
    mutations: {
      setRouteList(state, originRouteList) {
        state.routeList = originRouteList
      },
    },

  };
