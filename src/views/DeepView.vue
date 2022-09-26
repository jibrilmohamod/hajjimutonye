<template>
  <div class="bg-zinc-900" id="t">
    <TheNav />
    <div class="w-full pt-10">
      <TheHeader>DEEP DIVE</TheHeader>
      <p class="text-2xl text-yellow-50 text-center pt-3" id="description">
        Get more insight on my projects and the inspiration behind them.
      </p>
    </div>
    <div class="w-full pt-20">
      <div
        v-for="project in projects"
        :key="project.id"
        class="w-full h-[70vh] flex px-20 py-10 pb-40"
        id="deep"
      >
        <div class="w-1/2 text-yellow-50 flex flex-col justify-center gap-8 pr-6">
          <p class="text-4xl" id="title">
            {{ project.attributes.title }}
          </p>
          <p class="w-5/6 text-lg" id="descript">
            {{ project.attributes.description }}
          </p>
          <router-link
            :to="{ name: 'project', params: { slug: project.attributes.slug } }"
            class="aa"
          >
            <button class="text-lg bg-yellow-50 text-zinc-900 py-2 px-4 rounded-md">
              READ MORE
            </button>
          </router-link>
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

<style lang="scss" scoped>
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
    border: 1px solid red;
    margin: auto;
    padding-bottom: 0;
    font-size: 18px;
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
    border: 1px solid red;
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
  .aa {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
  .gap-8 {
    margin-top: -53px;
    border: 1px solid red;
  }
}
</style>
