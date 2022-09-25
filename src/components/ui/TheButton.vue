<template>
  <button class="bg-white rounded w-60 h-16 mb-36 text-xl">
    <slot />
  </button>
</template>

<script setup></script>

<style scoped>
@media screen and (max-width: 40em) {
  button {
    margin: auto;
    font-size: 15px;
    height: 6vh;
    width: 30vw;
  }
}
</style>
