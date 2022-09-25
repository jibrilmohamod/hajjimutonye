<template>
  <div class="bg-zinc-900 text-white pb-16">
    <TheNav />

    <!-- images and description -->
    <div class="w-[70vw] m-auto">
      <!-- project title -->
      <h1 class="text-5xl text-center pt-10">
        {{ currentProject.attributes.title }}
      </h1>
      <!-- project description -->
      <p class="w-1/2 m-auto text-2xl text-left pt-10">
        {{ currentProject.attributes.description }}
      </p>
      <!-- project images -->
      <div class="w-full flex flex-wrap justify-center gap-10 pt-10">
        <div
          v-for="image in currentProject.attributes.images.data"
          :key="image.id"
          class="w-full h-full rounded-md overflow-hidden"
        >
          <img :src="image.attributes.url" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import TheNav from "../components/TheNav.vue";

//  get projects from server
import { useProjects } from "../stores/projects";
const data = useProjects();

// get project by slug
const route = useRoute();
const currentSlug = route.params.slug;
const currentProject = computed(() => {
  return data.projects.find((project) => project.attributes.slug === currentSlug);
});
</script>

<style lang="scss" scoped></style>
