import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import register from "../views/register.vue";
import thanks from "../views/thanks.vue";
import user from "../views/user.vue";

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
    path: "/user/:id",
    name: "user",
    component: user,
    props: true,
  },
];

const router = new VueRouter({
  routes
});

export default router;
