<script setup>
import { RouterView } from "vue-router";
import TheName from "./components/TheName.vue";
import TheFooter from "./components/TheFooter.vue";
import { useHead } from "@vueuse/head";
import { computed, reactive } from "vue";

const siteData = reactive({
  title: `Haji Mutonye`,
  description: `Haji Mutonye is a Film-maker and concept creator from Nairobi,Kenya`,
});

useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
  ],
});
</script>

<template>
  <main class="">
    <header>
      <TheName></TheName>
    </header>
  </main>

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <TheFooter />
</template>

<style>
#app {
  font-family: "Cartograph CF", sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
