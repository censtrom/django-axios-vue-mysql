import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";

import store from "@/store/index";

const requireAuthenticated = (to, from, next) => {
  store.dispatch("auth/initialize").then(() => {
    if (!store.getters["auth/isAuthenticated"]) {
      next("/login");
    } else {
      next();
    }
  });
};

const requireUnauthenticated = (to, from, next) => {
  store.dispatch("auth/initialize").then(() => {
    if (store.getters["auth/isAuthenticated"]) {
      next("/home");
    } else {
      next();
    }
  });
};

const redirectLogout = (to, from, next) => {
  store.dispatch("auth/logout").then(() => next("/login"));
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: requireAuthenticated
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: requireUnauthenticated
  },
  {
    path: "/logout",
    beforeEnter: redirectLogout
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
