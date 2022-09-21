<template>
  <div class="bg-zinc-900 text-yellow-50">
    <TheNav />
    <div class="w-full">
      <div class="">
        <p class="text-center text-4xl m-4">
          {{ currentProject.attributes.title }}
        </p>
      </div>
      <!-- cover image -->
      <div class="w-full h-[70vh]">
        <img
          :src="currentProject.attributes.images.data[0].attributes.url"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <!-- content -->
      <div class="w-full">
        <div class="w-3/4 mx-auto border flex justify-center">
          <p
            class="text-xs first-line:text-yellow-600"
            id="content"
            v-html="currentProject.attributes.Content"
          ></p>
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

<style scoped>
#content h1 {
  font-size: 1.6rem;
}
</style>
