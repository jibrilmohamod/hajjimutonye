<script setup>
import { RouterView } from "vue-router";
import TheName from "./components/TheName.vue";
import TheFooter from "./components/TheFooter.vue";
import { useHead } from "@vueuse/head";
import { computed, reactive } from "vue";

const siteData = reactive({
  title: `Haji Mutonye`,
  description: `Haji Mutonye is a writer based in Nairobi, Kenya. Over the years, he has
        collaborated with a number of photographers to add a special touch of story to
        their visuals.What started out as a journey to tell stories by any medium
        necessary, has in recent years irresistibly drifted towards film, and there seems
        to be no altering to that.`,
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
  <main class="w-[100vw] md:w-full border border-red-400">
    <header>
      <TheName></TheName>
    </header>


    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <TheFooter />
  </main>
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
