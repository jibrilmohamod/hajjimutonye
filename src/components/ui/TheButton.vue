<template>
  <router-link to="" class="bg-white rounded px-5 py-3 mb-36 text-xl">
    <slot />
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
