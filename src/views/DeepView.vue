<template>
  <div class="bg-zinc-900">
    <TheNav />
    <div class="w-full pt-10">
      <TheHeader>DEEP DIVE</TheHeader>
      <p class="text-2xl text-yellow-50 text-center pt-3">
        Get more insight on my projects and the inspiration behind them.
      </p>
    </div>
    <div>{{ projects }}</div>
  </div>
</template>

<script setup>
import TheHeader from "../components/ui/TheHeader.vue";
import TheNav from "../components/TheNav.vue";
import { useProjects } from "../stores/projects";
import { ref } from "vue";

const data = useProjects();
const projects = ref(null);
projects.value = data.projects;

console.log(data);
</script>

<style lang="scss" scoped></style>
