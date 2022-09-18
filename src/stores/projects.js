import { defineStore } from "pinia";
import { ref } from "vue";
import strapi from "../strapi/strapi";

export const useProjects = defineStore('projects', () => {
  const projects = ref(null)

  async function getProjects() {
  await strapi.request("GET", "/projects?populate=deep").then((res) => {
    projects.value = res.data;
  });

  }

getProjects()

return {projects , getProjects}

})