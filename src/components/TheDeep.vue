<template>
  <div class="bg-zinc-900 h-[150vh] w-full flex flex-col" id="t">
    <div class="h-[20vh]">
      <TheHeader class="mb-10"><h2>DEEP DIVE</h2></TheHeader>
      <div class="flex justify-center text-yellow-50 text-2xl">
        <p class="w-2/6 tracking-wide text-center" id="description">
          Get more insight on my projects and the inspiration behind them.
        </p>
      </div>
    </div>

    <div class="w-full h-[110vh]">
      <router-link
        :to="{ name: 'project', params: { slug: project.attributes.slug } }"
        v-for="project in featuredProjects"
        :key="project.id"
        class="w-full h-1/2 flex px-20 py-10"
        id="deep"
      >
        <div class="w-1/2 text-yellow-50 flex flex-col justify-center gap-8 pr-6" id="y">
          <h2 class="text-4xl" id="title">
            {{ project.attributes.title }}
          </h2>
          <p class="w-5/6" id="descript">
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
    <TheButton class="m-auto"
      ><router-link to="/deepdive" class="px-16 py-3">SEE MORE</router-link></TheButton
    >
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

onBeforeMount(() => {
  getProjects();
});
</script>

<style scoped>
@media only screen and (max-width: 40em) {
  div {
    width: 99vw;
    font-size: 12px;
    height: max-content;
  }
  p {
    width: 50%;
  }
  #description {
    width: 80%;
  }
  #deep {
    width: 100%;

    display: flex;
    flex-direction: column;
    margin: unset;
    padding: 0;
    margin: 0;
    height: max-content;
  }
  #title {
    font-size: 1.2rem;

    text-align: center;
    width: 100%;
  }
  #descript {
    margin-top: -1.6rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.8rem;
    padding-left: 2px;
    padding-right: 2px;
  }
  #y {
    width: 100%;
    height: max-content;
    padding: 0;
  }
  img {
    width: 90vw;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .mb-10 {
    margin-bottom: 0;
  }
  .px-16 {
    padding: 1px;
    margin: 0;
    padding-left: 0;
  }
}
</style>
