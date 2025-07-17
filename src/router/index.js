import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// Import all of the questions
// Import the majors
import Art from "@/views/Majors/Art.vue";
import Business from "@/views/Majors/Business.vue";
import Communication from "@/views/Majors/Communication.vue";
import Education from "@/views/Majors/Education.vue";
import Health from "@/views/Majors/Health.vue";
import People from "@/views/Majors/People.vue";
import Science from "@/views/Majors/Science.vue";
import Technology from "@/views/Majors/Technology.vue";
import NotFound from "@/views/NotFound.vue";

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
