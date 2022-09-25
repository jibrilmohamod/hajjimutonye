import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import WorkView from "../views/WorkView.vue"
import DeepView from "../views/DeepView.vue"
import ProjectView from "../views/ProjectView.vue"
import JournalView from "../views/JournalView.vue"
import ImagesView from "../views/ImagesView.vue"




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
   component: DeepView,
  },
  {
   path: "/project/:slug",
   name: "project",
   component: ProjectView,
  },
  {
   path: "/images/:slug",
   name: "images",
   component:ImagesView,
  },
  {
   path: "/journal",
   name: "journal",
   component: JournalView,
  },
 ],
})

export default router
