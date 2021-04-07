import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
// import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    userID: -1,
    role:-1,
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
  role(state, payload) {
      state.role = payload;
    },
  },
  actions: {
    async login({ commit }) {
      firebase.auth().onAuthStateChanged(async currentUser => {
    if (currentUser) {
      const idToken = await currentUser.getIdToken(true);
      // 何らかの認証が必要なリクエストをIDトークン付きで飛ばす
      // console.log(idToken);
       await axios.get(
       process.env.VUE_APP_API_DEVELOP + "/login",
        {
          headers: {
            Authorization: idToken
          }
        }
      ).then((res) => {
        commit("auth", res.data.auth);
        commit("userID", res.data.id);
        commit("role", res.data.role);
      })
    }
  });
    },
    logout({ commit }) {
      commit("logout", false);
    },
    
  },

  modules: {}
});
