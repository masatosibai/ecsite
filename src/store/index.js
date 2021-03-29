import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
// import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    userID:1
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
    async login() {   
      firebase.auth().onAuthStateChanged(async currentUser => {
    if (currentUser) {
      const idToken = await currentUser.getIdToken(true);
      // 何らかの認証が必要なリクエストをIDトークン付きで飛ばす
      console.log(idToken);
      const res = await axios.get(
       process.env.VUE_APP_API_ORIGIN + "/login",
        {
          headers: {
            Authorization: idToken
          }
        }
      );
      console.log(res);
    } else {
      // window.location.href = "/login";
    }
  });
      // const responseLogin = await axios.post(
      //   process.env.VUE_APP_API_ORIGIN + "/login",{
      //     idtoken}
      // );
      // console.log(responseLogin);
      // commit("auth", true);
      // // commit("userID", responseLogin.data.id);
      // router.replace("/");
    },
    logout({ commit }) {
      // axios
      //   .post(process.env.VUE_APP_API_ORIGIN+"/logout", {
      //     auth: this.state.auth,
      //   })
      //   .then((response) => {
      //     console.log(response);
      //     commit("logout", response.data.auth);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      commit("logout", false);
    },
    
  },

  modules: {}
});
