<template>
  <div class="border">
    <router-link to="/" class="">
      <img src="../assets/images/You.svg" alt="" class="w-full" />
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@media screen and (max-width: 40em) {
  img {
    width: 100vw;
    height: 8vh;
  }
}
</style>
