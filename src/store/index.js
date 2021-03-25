import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    userID:-1
  },
  mutations: {
  auth(state, payload) {
      state.auth = payload;
    },
    
  logout(state, payload) {
      state.auth = payload;
    },
  userID(state, payload) {
      state.userID = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const responseLogin = await axios.post(
        process.env.VUE_APP_API_ORIGIN+"/login",
        {
          email: email,
          password: password,
        }
      );
      commit("auth", responseLogin.data.auth);
      commit("userID", responseLogin.data.id);
      router.replace("/");
    },
    logout({ commit }) {
      axios
        .post(process.env.VUE_APP_API_ORIGIN+"/logout", {
          auth: this.state.auth,
        })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.auth);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    
  },

  modules: {}
});
