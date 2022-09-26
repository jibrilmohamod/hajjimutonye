<template>
  <div class="">
    <router-link to="/" class="l">
      <h1>
        <img src="../assets/images/You.svg" alt="" class="w-full" />
      </h1>
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
    height: 10vh;
  }
  .l {
    width: 100vw;
    padding: 0;
    margin: 0;
  }
  div {
    width: 100vw;
    padding: 0;
    margin: 0;
  }
}
</style>
