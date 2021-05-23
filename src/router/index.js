import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/accounts/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/accounts/sign-up",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
  {
    path: "/products/:slug/:id",
    name: "ProductDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetail.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  /*scrollBehavior(to, from, savedPosition) {
    return {x:0, y:0}
  }*/
});

export default router;
