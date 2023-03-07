<template>
  <div class="bg-zinc-900 text-yellow-50">
    <TheNav />
    <div class="w-full">
      <div class="">
        <h2 class="text-center text-4xl m-4">
          {{ currentProject.title }}
        </h2>
      </div>
      <!-- cover image -->
      <div class="w-full h-[70vh] mb-10">
        <img :src="currentProject.images[2]"
             alt=""
             class="w-full h-full object-cover" />
      </div>
      <!-- content -->
      <div class="w-full">
        <div class="w-[80vw] mx-auto flex justify-center pb-10"
             id="d">
          <p class=""
             id="content"
             v-html="currentProject.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import TheNav from "../components/TheNav.vue";
import data from "../assets/projects.json";

import { useHead } from "@vueuse/head";

//  get projects from server
const projects = ref(data.projects);

// get project by slug
const route = useRoute();
const currentSlug = route.params.slug;
const currentProject = computed(() => {
  return projects.value.find((project) => project.title === currentSlug);
});

// meta data

useHead({
  title: `Haji Mutonye/${currentProject.value.title}`,
  meta: [
    {
      name: "description",
      content: currentProject.value.description,
    },
    {
      name: "keywords",
      content: "projects, deep dive, inspiration",
    },
    {
      name: "author",
      content: "Haji Mutonye",
    },
  ],
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

#content h1 {
  font-size: 1.3em;
  font-family: "Mali", cursive;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 4px;
}

@media screen and (max-width: 40em) {
  #content img {
    width: 100%;
    height: 20em;
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
    font-size: 0.8em;
    letter-spacing: 3px;
    font-family: "Mali", cursive;
    font-weight: 300;
  }

  #content strong {
    font-size: 1.3em;
    font-family: "Mali", cursive;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 4px;
  }

  #d {
    width: 100vw;
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>
