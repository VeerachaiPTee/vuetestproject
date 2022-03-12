import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StoreView from "../views/StoreView.vue";
import loginShop from "@/components/loginShop.vue";
import registerShop from "@/components/registerShop.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: loginShop,
    },
    {
      path: "/register",
      name: "registershop",
      component: registerShop,
    },
    {
      path: "/store",
      name: "storeview",
      component: StoreView,
    },
  ],
});

export default router;
