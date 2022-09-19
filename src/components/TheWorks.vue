<template>
  <div class="h-screen w-full bg-zinc-900 px-32 border flex flex-col items-center">
    <!-- title -->
    <TheHeader>MY WORK</TheHeader>
    <!-- works -->
    <div class="row flex h-[80vh] w-[60vw] content-around justify-center mx-auto border">
      <div
        class="col-md-5 flex justify-center"
        v-for="project in featuredProjects"
        :key="project.id"
      >
        <router-link to="" class="h-[30vh]">
          <img
            :src="project.attributes.thumbnail.data.attributes.formats.small.url"
            alt=""
            class="h-full w-full"
          />
        </router-link>
      </div>
    </div>
    <TheButton>SEE MORE</TheButton>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import strapi from "../strapi/strapi";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap";
import TheHeader from "./ui/TheHeader.vue";
import TheButton from "./ui/TheButton.vue";

//  get projects from server

const projects = ref([]);

const getProjects = async () => {
  await strapi.request("GET", "/projects?populate=deep").then((res) => {
    projects.value = res.data;
  });
};

const featuredProjects = computed(() => {
  return projects.value.slice(0, 4);
});

onMounted(() => {
  getProjects();
});
</script>

<style lang="scss" scoped></style>
