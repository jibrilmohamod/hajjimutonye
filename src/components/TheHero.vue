<template>
  <div class="h-[87vh] w-full bg-cover" id="hero">
    <TheNav></TheNav>

    <div class="h-[84vh] w-full flex justify-center items-end">
      <router-link to="/deepdive" class="bg-white rounded px-5 py-3 mb-36 text-xl"
        >LEARN MORE
      </router-link>
    </div>
  </div>
</template>

<script setup>
import TheNav from "./TheNav.vue";
</script>

<style>
#hero {
  background-image: url("../assets/images/HeroImage.webp");
}
@media only screen and (max-width: 40em) {
  #hero {
    width: 100vw;
    background: url("../assets/images/PrivateDreams1x1.png") no-repeat center;
    background-size: cover;
  }
}
</style>
