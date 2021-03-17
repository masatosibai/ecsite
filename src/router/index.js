import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import register from "../views/register.vue";
import thanks from "../views/thanks.vue";
import myPage from "../views/myPage.vue";
import login from "../views/login.vue";
import done from "../views/done.vue";

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
  },
  {
    path: "/myPage/:id",
    name: "myPage",
    component: myPage,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
        {
    path: "/done",
    name: "done",
    component: done,
  },
];

const router = new VueRouter({
  routes
});

export default router;
