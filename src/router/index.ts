import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import NewView from "../views/NewView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/new", component: ()=>import("../views/NewView.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
