<script setup>
import { RouterView } from "vue-router";
import TheName from "./components/TheName.vue";
import TheFooter from "./components/TheFooter.vue";
import { useHead } from "@vueuse/head";
import { computed, reactive } from "vue";

const siteData = reactive({
  title: `Haji Mutonye`,
  description: `HAJI MUTONYE is a new and upcoming cinematographer who got his first cinematography experience on a short film titled SOFT-BOOT directed by John U. The short film was screened at the 2013 Cannes Film Festival. He then served as Associate Cinematographer on`,
  keywords: `HAJJIMUTONYE, HAJIMUTONYE, PEKAT DRESS CREATIVE, HAJI, PAREXELLENCE,TRANS ATLANTIC`,
  author: `JibrilMohamod`,
  robots: `index, follow`,
  language: `English`,
});

useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
    {
      name: `keywords`,
      content: computed(() => siteData.keywords),
    },
    {
      name: `author`,
      content: computed(() => siteData.author),
    },
    {
      name: `robots`,
      content: computed(() => siteData.robots),
    },
    {
      name: `language`,
      content: computed(() => siteData.language),
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
  font-family: "Source Code Pro", sans-serif;
  font-weight: 500;
  scroll-behavior: smooth;
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
