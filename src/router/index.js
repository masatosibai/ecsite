import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import register from "../views/register.vue";
import thanks from "../views/thanks.vue";
import myPage from "../views/myPage.vue";
import login from "../views/login.vue";
import done from "../views/done.vue";
import shops from "../views/shops.vue";
import admin from "../views/admin.vue";
import shopadmin from "../views/shopadmin.vue";
import registerShop from "../views/registerShop.vue";
import updateShop from "../views/updateShop.vue";

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
  {
    path: "/shops/:id",
    name: "shops",
    component: shops,
    props: true,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
  },
  {
    path: "/shopadmin",
    name: "shopadmin",
    component: shopadmin,
  },
  {
    path: "/registerShop",
    name: "registerShop",
    component: registerShop,
  },
  {
    path: "/updateShop/:id",
    name: "updateShop",
    component: updateShop,
    props: true,
  },
];

const router = new VueRouter({
  routes
});

export default router;
