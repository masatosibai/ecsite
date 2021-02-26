import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import register from "../views/register.vue";
import thanks from "../views/thanks.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
    {
    path: "/thanks",
    name: "thanks",
    component: thanks
  }
];

const router = new VueRouter({
  routes
});

export default router;
