<template>
  <div>
    <nav class="flex justify-center text-2xl text-white py-1">
      <RouterLink to="/works" class="px-14">WORK</RouterLink>
      <RouterLink to="/deepdive" class="px-14">DEEP DIVE</RouterLink>
      <RouterLink to="/journal" class="px-14">JOURNAL</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
@media screen and (max-width: 40em) {
  nav {
    font-size: 10px;
  }
}
</style>
