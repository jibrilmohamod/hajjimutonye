import { defineStore } from "pinia";
import strapi from "../strapi/strapi";
import { ref } from "vue";


export const useYoutube = defineStore('videos', () => {
const videos = ref(null)

async function getVideos() {
    await strapi.request("GET", "/journals").then((res) => {
     videos.value = res.data
    })
}

getVideos()

return {videos , getVideos}

})