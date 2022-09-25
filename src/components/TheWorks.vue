<template>
  <div class="h-[120vh] w-full bg-zinc-900 px-32 flex flex-col items-center">
    <!-- title -->
    <TheHeader>MY WORK</TheHeader>
    <!-- works -->
    <div class="row flex h-[100vh] w-[80vw] content-around justify-center mx-auto">
      <div
        class="col-md-5 flex justify-center"
        v-for="project in featuredProjects"
        :key="project.id"
        v-animate-css="'fadeIn'"
      >
        <router-link
          :to="{ name: 'images', params: { slug: project.attributes.slug } }"
          class="h-[37vh]"
        >
          <img
            :src="project.attributes.thumbnail.data.attributes.formats.small.url"
            alt=""
            class="h-full w-full rounded-md"
            v-animate-onscroll="{ down: 'animated slideInLeft' }"
          />
        </router-link>
      </div>
    </div>
    <TheButton class="m-auto"
      ><router-link to="/works" class="px-16 py-3 border"
        >SEE MORE</router-link
      ></TheButton
    >
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import strapi from "../strapi/strapi";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap";
import TheHeader from "./ui/TheHeader.vue";
import TheButton from "./ui/TheButton.vue";
import { useProjects } from "../stores/projects";

//  get projects from server
const data = useProjects();
console.log(data);
const projects = ref([]);

const getProjects = async () => {
  await strapi.request("GET", "/projects?populate=deep").then((res) => {
    projects.value = res.data;
  });
};

let indexes = [0, 1, 2, 4];

const featuredProjects = computed(() => {
  return projects.value.filter((project, index) => {
    return indexes.includes(index);
  });
});

onBeforeMount(() => {
  getProjects();
});
</script>

<style scoped></style>
