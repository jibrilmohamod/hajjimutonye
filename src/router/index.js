import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import WorkView from "../views/WorkView.vue"
import Deepiew from "../views/DeepView.vue"

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
   path: "/",
   name: "home",
   component: HomeView,
  },
  {
   path: "/works",
   name: "works",
   component: WorkView,
  },
  {
   path: "/deepdive",
   name: "deepdive",
   component: Deepiew,
  },
 ],
})

export default router
