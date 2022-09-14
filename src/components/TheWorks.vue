<template>
  <div class="h-screen w-full bg-blue-900 px-32">
    <!-- title -->
    <div class="w-full flex justify-center">
      <p class="text-5xl text-white">MY WORKS</p>
    </div>
    <!-- works -->
    <div class="h-full w-full border">
      <div v-for="project in projects" :key="project.id">
        <img
          :src="project.attributes.thumbnail.data.attributes.formats.medium.url"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import strapi from "../strapi/strapi";

//  get projects from server

const projects = ref([]);

const getProjects = async () => {
  const res = await strapi.request("GET", "/projects?populate=deep").then((res) => {
    projects.value = res.data;
  });
};

onMounted(() => {
  getProjects();
});
</script>

<style lang="scss" scoped></style>
