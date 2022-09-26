<template>
  <div class="h-[87vh] w-full bg-cover" id="hero">
    <TheNav></TheNav>

    <div class="h-[84vh] w-full flex justify-center items-end" id="flex">
      <router-link to="/deepdive" id="d55" class="bg-white rounded mb-36 text-xl"
        ><p>LEARN MORE</p>
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
#d55 {
  padding: 1rem 2rem;
}
@media only screen and (max-width: 40em) {
  #hero {
    width: 100vw;
    background: url("../assets/images/PrivateDreams1x1.png") no-repeat center;
    background-size: cover;
  }
  #d55 {
    padding: 0;
    font-size: 18px;

    margin: 0;
    width: 40vw;
    height: 3rem;
    margin-bottom: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1rem;
  }
  #flex {
    margin-bottom: 0;

    flex-direction: row;
  }
  p {
    margin: 0;

    padding: 0;
    text-align: center;
  }
}
</style>
