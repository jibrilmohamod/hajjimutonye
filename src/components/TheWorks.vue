<template>
  <div class="h-[120vh] w-full bg-zinc-900 px-32 flex flex-col items-center" id="t">
    <!-- title -->
    <TheHeader class="hr">MY WORK</TheHeader>
    <!-- works -->
    <div class="row flex h-[100vh] w-[80vw] content-around justify-center mx-auto" id="u">
      <div
        class="col-md-5 flex justify-center"
        v-for="project in featuredProjects"
        :key="project.id"
        v-animate-css="'fadeIn'"
        id="works"
      >
        <router-link
          :to="{ name: 'images', params: { slug: project.attributes.slug } }"
          class="h-[37vh]"
          id="link"
        >
          <img
            :src="project.attributes.thumbnail.data.attributes.formats.small.url"
            alt=""
            class="h-full w-full rounded-md"
            v-animate-onscroll="{ down: 'animated fadeIn' }"
          />
        </router-link>
      </div>
    </div>
    <TheButton class="m-auto"
      ><router-link to="/works" class="px-16 py-3">SEE MORE</router-link></TheButton
    >
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import strapi from "../strapi/strapi";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap";
import TheHeader from "./ui/TheHeader.vue";
import TheButton from "./ui/TheButton.vue";

//  get projects from serve
const projects = ref([]);

const getProjects = async () => {
  await strapi.request("GET", "/projects?populate=deep").then((res) => {
    projects.value = res.data;
  });
};

let indexes = [0, 1, 2, 4];

const featuredProjects = computed(() => {
  return projects.value.filter((project, index) => {
    return indexes.includes(index);
  });
});

onBeforeMount(() => {
  getProjects();
});
</script>

<style scoped>
@media only screen and (max-width: 40em) {
  #t {
    height: fit-content;
    padding: 0;
    padding-bottom: 20px;
  }
  #works {
    height: max-content;

    width: 100%;
  }
  #link {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  .hr {
    width: 100vw;
    margin-bottom: 20px;
  }

  #u {
    width: 90vw;
    padding: 0;
    margin: 0;
    height: max-content;
  }
  .px-16 {
    padding: 1px;
    margin: 0;
    padding-left: 0;
    margin-bottom: 20px;
  }
}
</style>
