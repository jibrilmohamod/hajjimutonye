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

  <RouterView />
  <TheFooter />
</template>

<style>
#app {
  font-family: "Cartograph CF", sans-serif;
}
</style>
