<script setup>
 import { RouterView } from "vue-router"
 import TheName from "./components/TheName.vue"
 import TheNav from "./components/TheNav.vue"
</script>

<template>
 <main class="">
  <header>
   <TheName></TheName>
   <TheNav></TheNav>
  </header>
 </main>

 <RouterView />
</template>
