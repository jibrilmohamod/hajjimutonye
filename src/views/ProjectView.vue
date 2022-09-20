<template>
  <div class="bg-zinc-900 text-yellow-50">
    {{ currentSlug }}
    {{ currentProject }}
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import strapi from "../strapi/strapi";

//  get projects from server

// get project by slug
const route = useRoute();
const currentSlug = route.params.slug;
const currentProject = ref([]);

const getProjectBySlug = async () => {
  await strapi
    .request("GET", `/projects?slug=${currentSlug}&populate=deep`)
    .then((res) => {
      currentProject.value = res.data;
    });
};

onBeforeMount(() => {
  getProjectBySlug();
});
</script>

<style lang="scss" scoped></style>
