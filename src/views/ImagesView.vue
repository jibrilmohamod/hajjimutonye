<template>
  <div class="bg-zinc-900 text-white pb-16">
    <TheNav />

    {{ currentProject.images }}
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
