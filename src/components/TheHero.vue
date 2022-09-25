<template>
  <div class="h-[87vh] w-full bg-cover" id="hero">
    <TheNav></TheNav>

    <div class="h-[84vh] w-full flex justify-center items-end">
      <router-link to="" class="bg-white rounded px-5 py-3 mb-36 text-xl"
        >LEARN MORE
      </router-link>
    </div>
  </div>
</template>

<script setup>
import TheNav from "./TheNav.vue";
</script>

<style scoped>
#hero {
  background-image: url("../assets/images/HeroImage.webp");
}
</style>
