<template>
  <div>
    <nav
      class="border flex justify-center text-2xl text-white py-1 hover:text-fuchsia-600"
    >
      <RouterLink to="/" class="px-14">WORK</RouterLink>
      <RouterLink to="/about" class="px-14">DEEP DIVE</RouterLink>
      <RouterLink to="/about" class="px-14">JOURNAL</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
