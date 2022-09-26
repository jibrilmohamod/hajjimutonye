<script setup>
import { RouterView } from "vue-router";
import TheName from "./components/TheName.vue";
import TheFooter from "./components/TheFooter.vue";
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
