import { defineStore } from "pinia";
import { computed, ref } from "vue";
import strapi from "../strapi/strapi";

export const useProjects = defineStore('projects', () => {
  const projects = ref(null)

  async function getProjects() {
  await strapi.request("GET", "/projects?populate=deep").then((res) => {
    projects.value = res.data;
  });

  }

  const featuredProjects = computed(() => {
   return projects.value.slice(0, 4)
  })
  

getProjects()

return {projects , getProjects, featuredProjects}

})