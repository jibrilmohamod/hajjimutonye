<template>
  <div class="h-screen bg-zinc-900 w-full px-32 pt-20" id="prof">
    <!-- name and img -->

    <p class="text-5xl text-white text-center">WHO IS HAJI MUTONYE?</p>
    <div class="h-96 w-96 bg-slate-400 rounded-full mx-auto my-8" id="img">
      <img
        src="../assets/images/profile.jpg"
        alt=""
        class="h-full w-full rounded-full object-cover object-center"
      />
    </div>

    <!-- about -->

    <div class="w-full text-yellow-50 text-xl mt-9 mx-auto">
      <p id="about" class="w-1/2 m-auto">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
      </p>
    </div>

    <!-- call to action -->
    <div class="w-full flex justify-center items-end mt-10">
      <TheButton class="ss"> GET IN TOUCH </TheButton>
    </div>
  </div>
</template>

<script setup>
import TheButton from "./ui/TheButton.vue";
</script>

<style scoped>
@media screen and (max-width: 40em) {
  p {
    font-size: 1.4rem;
  }
  #prof {
    padding: 1rem 1rem;
    width: 100vw;
  }
  #img {
    width: 56vw;
    height: 28vh;
  }
  #about {
    width: 100%;
    margin: unset;
    padding: unset;
    font-size: 0.7rem;
    text-align: center;
  }
  .ss {
    font-size: 0.7rem;
  }
}
</style>
