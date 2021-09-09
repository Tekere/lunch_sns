import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import Archive from "../views/Archive.vue";
import Profile from "../views/Profile.vue";
import Explore from "../views/Explore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/archive",
    name: "Archive",
    component: Archive,
  },
  {
    path: "/user",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "*",
    redirect: "/dashboard",
  },
  // {
  // path: "/about",
  // name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  // import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
