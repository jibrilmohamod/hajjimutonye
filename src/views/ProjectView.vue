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
      <div class="w-full h-[70vh] mb-10">
        <img
          :src="currentProject.attributes.images.data[0].attributes.url"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <!-- content -->
      <div class="w-full">
        <div class="w-[80vw] mx-auto flex justify-center">
          <p class="" id="content" v-html="currentProject.attributes.Content"></p>
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

<style>
#content p::first-letter {
  font-size: 1.4em;
}

#content img {
  width: 60%;
  height: 30em;
  object-fit: cover;
  object-position: 20% 20%;
  float: left;
  margin-top: 20px;
  margin-right: 40px;
  border-radius: 20px;
  margin-bottom: 20px;
}
#content p {
  margin-top: 30px;
  margin-bottom: 4px;
  font-size: 1.25em;
  letter-spacing: 3px;
  font-family: "Mali", cursive;
  font-weight: 300;
}
</style>
