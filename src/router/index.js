import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/majors/art",
    name: "Art",
    component: () => import("@/views/Majors/Art.vue"),
  },
  {
    path: "/majors/business",
    name: "Business",
    component: () => import("@/views/Majors/Business.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
