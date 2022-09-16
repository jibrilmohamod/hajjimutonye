<template>
  <div class="bg-zinc-900 text-white">
    <TheNav></TheNav>
    <div class="-red-600 py-8">
      <TheHeader>MY WORK</TheHeader>
      <div v-for="project in projects" :key="project.id" class="w-full">
        <div class="w-full bg-green-600 h-[70vh] my-8">
          <router-link to="" class="w-full -red-500">
            <img
              :src="project.attributes.cover.data.attributes.url"
              alt=""
              class="w-full h-full object-cover"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import strapi from "../strapi/strapi";
import TheHeader from "../components/ui/TheHeader.vue";
import TheNav from "../components/TheNav.vue";

//  get projects from server

const projects = ref([]);

const getProjects = async () => {
  await strapi.request("GET", "/projects?populate=deep").then((res) => {
    projects.value = res.data;
  });
};

onBeforeMount(() => {
  getProjects();
});
</script>

<style lang="scss" scoped></style>
