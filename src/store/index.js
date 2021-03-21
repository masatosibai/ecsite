import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    userID:""
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
        "http://127.0.0.1:8000/api/login",
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
        .post("http://127.0.0.1:8000/api/logout", {
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
