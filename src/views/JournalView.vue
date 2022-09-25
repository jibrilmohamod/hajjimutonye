<template>
  <div class="bg-zinc-900">
    <TheNav />
    <div class="w-full pt-10">
      <TheHeader>JOURNAL</TheHeader>
      <p class="text-2xl text-yellow-50 text-center pt-3">
        Get more insight on my projects and the inspiration behind them.
      </p>
    </div>

    <!-- content -->
    <div class="w-full pt-20">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="w-full h-[70vh] flex px-20 py-10 pb-40 border"
      >
        <div class="w-1/2 text-yellow-50 flex flex-col justify-center gap-8 pr-6">
          <p class="text-4xl">{{ video.attributes.title }}</p>
          <p class="w-5/6 text-lg">{{ video.attributes.description }}</p>
          <router-link to="" class="">
            <button class="text-lg bg-yellow-50 text-zinc-900 py-2 px-4 rounded-md">
              WATCH VIDEO
            </button>
          </router-link>
        </div>
        <div class="w-1/2 h-full text-white border"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import TheNav from "../components/TheNav.vue";
import TheHeader from "../components/ui/TheHeader.vue";
import strapi from "../strapi/strapi";

const videos = ref({});

const getVideos = async () => {
  await strapi.request("GET", "/journals").then((res) => {
    const { data } = res;
    videos.value = data;
  });
};

onBeforeMount(() => {
  getVideos();
});
</script>

<style lang="scss" scoped></style>
