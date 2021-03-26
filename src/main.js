import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VCalendar from 'v-calendar';
import firebase from 'firebase';
Vue.use(VCalendar);

Vue.config.productionTip = false;
const config = {
  apiKey: "AIzaSyBNQ9dlqhn7VXGSQk0rlzGS9YahZxG3WDI",
  authDomain: "ecsite-91586.firebaseapp.com",
  projectId: "ecsite-91586",
  storageBucket: "ecsite-91586.appspot.com",
  messagingSenderId: "179203934427",
  appId: "1:179203934427:web:e40ca99b2122c5b69024fe"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
