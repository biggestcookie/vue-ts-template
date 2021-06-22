import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "/@/views/home.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "home",
    },
  },
  {
    path: "/404",
    component: () => import("/@/views/404.vue"),
    meta: {
      title: "404 not found",
    },
  },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) =>
    to.hash ? { el: to.hash, behavior: "smooth" } : { top: 0, left: 0 },
});

router.beforeEach((to, _, next) => {
  document.title = (to.meta?.title as string) || "vue";
  next();
});

export default router;
