<template>
  <div class="bg-zinc-900 text-white w-full h-fit">
    <TheNav></TheNav>
    <div class="-red-600 py-8">
      <TheHeader>MY WORK</TheHeader>
      <div v-for="project in projects"
           :key="project.id"
           class="w-full">
        <div class="w-full bg-green-600 h-[70vh] my-14">
          <router-link :to="{}"
                       class="w-full -red-500">
            <img :src="project.images[1]"
                 alt=""
                 class="w-full h-full object-cover hover:transform hover:scale-110 transition-all duration-500" />
          </router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "../components/ui/TheHeader.vue";
import TheNav from "../components/TheNav.vue";
import data from "../assets/projects.json";
//  get projects from server

const projects = ref(data.projects);

</script>

<style lang="scss" scoped>
@media screen and (max-width: 40em) {
  .w-full {
    width: 100vw;
  }

  img {
    width: 90vw;
    object-fit: cover;
    object-position: 30% 0;
  }
}
</style>
