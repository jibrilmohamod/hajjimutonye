<template>
  <div class="bg-zinc-900">
    <TheNav />
    <div class="w-full pt-10">
      <TheHeader>DEEP DIVE</TheHeader>
      <p class="text-2xl text-yellow-50 text-center pt-3">
        Get more insight on my projects and the inspiration behind them.
      </p>
    </div>
    <div class="w-full pt-20">
      <div
        v-for="project in projects"
        :key="project.id"
        class="w-full h-[70vh] flex px-20 py-10 pb-40"
      >
        <div class="w-1/2 text-yellow-50 flex flex-col justify-center gap-8 pr-6">
          <p class="text-2xl">
            {{ project.attributes.title }}
          </p>
          <p class="w-5/6">
            {{ project.attributes.description }}
          </p>
        </div>
        <div class="w-1/2 text-white">
          <img
            :src="project.attributes.images.data[2].attributes.url"
            alt=""
            class="w-11/12 h-full rounded-md object-cover"
          />
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
