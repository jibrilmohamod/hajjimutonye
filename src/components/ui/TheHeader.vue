<template>
  <div class="w-full flex justify-center">
    <p class="text-5xl text-white"><slot /></p>
  </div>
</template>

<script setup></script>

<style scoped>
@media screen and (max-width: 40em) {
  p {
    font-size: 30px;
  }
}
</style>
