<template>
  <div class="bg-zinc-900 h-[150vh] w-full flex flex-col">
    <div class="h-[20vh]">
      <TheHeader class="mb-10">DEEP DIVE</TheHeader>
      <div class="flex justify-center text-yellow-50 text-2xl">
        <p class="w-2/6 tracking-wide text-center">
          Get more insight on my projects and the inspiration behind them.
        </p>
      </div>
    </div>

    <div class="w-full h-[110vh]">
      <router-link
        to=""
        v-for="project in featuredProjects"
        :key="project.id"
        class="w-full h-1/2 flex px-20 py-10"
      >
        <div class="w-1/2 text-yellow-50 flex flex-col justify-center gap-8 pr-6">
          <p class="text-4xl">
            {{ project.attributes.title }}
          </p>
          <p class="w-5/6">
            {{ project.attributes.description }}
          </p>
        </div>
        <div class="w-1/2">
          <img
            :src="project.attributes.cover.data.attributes.url"
            alt=""
            class="w-11/12 h-full rounded-md"
          />
        </div>
      </router-link>
    </div>
    <TheButton class="m-auto">SEE MORE</TheButton>
  </div>
</template>

<script setup>
import TheHeader from "./ui/TheHeader.vue";
import { computed, onBeforeMount, ref } from "vue";
import strapi from "../strapi/strapi";
import TheButton from "./ui/TheButton.vue";

//  get projects from server

const projects = ref([]);

const getProjects = async () => {
  await strapi.request("GET", "/projects?populate=deep").then((res) => {
    projects.value = res.data;
  });
};

let indexes = [4, 0];

const featuredProjects = computed(() => {
  return projects.value.filter((project, index) => {
    return indexes.includes(index);
  });
});

console.log(projects);

onBeforeMount(() => {
  getProjects();
});
</script>

<style lang="scss" scoped></style>
