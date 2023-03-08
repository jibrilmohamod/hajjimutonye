<template>
  <div class="h-screen bg-zinc-900 px-32 pt-20"
       id="prof">
    <!-- name and img -->

    <h2 class="text-5xl text-white text-center">WHO IS HAJI MUTONYE?</h2>
    <div class="h-[40vh] w-[20vw] bg-slate-400 rounded-full mx-auto my-8"
         id="img">
      <img src="../assets/images/profile.jpg"
           alt=""
           class="h-full w-full rounded-full object-cover object-center" />
    </div>

    <!-- about -->

    <div class="w-full text-yellow-50 text-xl mt-9 mx-auto">
      <p id="about"
         class="w-1/2 m-auto">
        Haji Mutonye is a writer based in Nairobi, Kenya. Over the years, he has
        collaborated with a number of photographers to add a special touch of story to
        their visuals.What started out as a journey to tell stories by any medium
        necessary, has in recent years irresistibly drifted towards film, and there seems
        to be no altering to that.
      </p>
    </div>

    <!-- call to action -->
    <div class="w-full flex justify-center items-end mt-10">
      <TheButton class="ss"><a href="mailto:haji@hajimutonye.com">GET IN TOUCH</a>
      </TheButton>
    </div>
  </div>
</template>

<script setup>
import TheButton from "./ui/TheButton.vue";
</script>

<style scoped>
@media screen and (max-width: 40em) {
  h2 {
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
}</style>
