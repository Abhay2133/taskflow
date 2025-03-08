import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/pages/HomePage.vue";
import NewView from "@/pages/TaskEditor.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/new", component: NewView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
