import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      console.log("user", user);
      state.user = user;
      console.log("state", state.user);
    },
  },
  actions: {
    setUser(context, user) {
      context.commit("setUser", user);
    },
  },
  modules: {},
});
