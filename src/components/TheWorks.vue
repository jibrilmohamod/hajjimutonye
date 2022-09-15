<template>
  <div class="h-screen w-full bg-blue-900 px-32">
    <!-- title -->
    <div class="w-full flex justify-center">
      <p class="text-5xl text-white">MY WORKS</p>
    </div>
    <!-- works -->
    <div class="row flex h-[80vh] content-around justify-center">
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
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import strapi from "../strapi/strapi";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

//  get projects from server

const projects = ref([]);

const getProjects = async () => {
  const res = await strapi.request("GET", "/projects?populate=deep").then((res) => {
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
