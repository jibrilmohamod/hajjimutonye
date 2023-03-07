<template>
  <div class="bg-zinc-900 text-white pb-16">
    <TheNav />

    <div class="w-[70vw] m-auto">
      <!-- project title -->
      <h1 class="text-5xl text-center pt-10">
        {{ currentProject.title }}
      </h1>
      <!-- project description -->
      <p class="w-1/2 m-auto text-2xl text-left pt-10">
        {{ currentProject.description }}
      </p>
      <!-- project images -->
      <div class="w-full flex flex-wrap justify-center gap-10 pt-10">
        <div v-for="image in currentProject.images"
             :key="image.id"
             class="w-full h-full rounded-md overflow-hidden">
          <img :src="image"
               alt=""
               class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import TheNav from "../components/TheNav.vue";

//  get projects from server
import data from "../assets/projects.json";
const projects = ref(data.projects);

// get project by slug
const route = useRoute();
const currentSlug = route.params.slug;
const currentProject = computed(() => {
  return projects.value.find((project) => project.title === currentSlug);
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 40em) {
  p {
    font-size: 16px;
    width: 100%;
    padding-left: 7px;
    margin: auto;
  }

  div {
    width: 100%;
  }

  h1 {
    font-size: 30px;
  }
}
</style>
