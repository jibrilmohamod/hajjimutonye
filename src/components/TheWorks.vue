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
      >
        <router-link to="" class="h-[37vh]">
          <img
            :src="project.attributes.thumbnail.data.attributes.formats.small.url"
            alt=""
            class="h-full w-full rounded-md"
          />
        </router-link>
      </div>
    </div>
    <TheButton class="m-auto">SEE MORE</TheButton>
  </div>
</template>

<script setup>
import { ref } from "vue";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap";
import TheHeader from "./ui/TheHeader.vue";
import TheButton from "./ui/TheButton.vue";
import { useProjects } from "../stores/projects";

//  get projects from server
const data = useProjects();
console.log(data);
const projects = ref([]);

projects.value = data.projects;

const featuredProjects = ref([]);

featuredProjects.value = data.featuredProjects;
</script>

<style lang="scss" scoped></style>
