import { createApp } from "vue"
import { createPinia } from "pinia"
import { VueShowdownPlugin } from "vue-showdown"
import iVueFrame from "i-vue-frame"
import VueAnimateOnScroll from "vue3-animate-onscroll"
import VAnimateCss from "v-animate-css"
import { createHead } from "@vueuse/head"

import App from "./App.vue"
import router from "./router"
import './assets/tailwind.css'


const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(VueShowdownPlugin, {
 // set default flavor of showdown
 flavor: "github",
 // set default options of showdown (will override the flavor options)
 options: {
  emoji: false,
 },
})
app.use(iVueFrame)
app.use(VueAnimateOnScroll)
app.use(VAnimateCss)
app.use(head)





app.mount("#app")
