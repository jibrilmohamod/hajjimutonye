import { createApp } from "vue"
import { createPinia } from "pinia"
import { VueShowdownPlugin } from "vue-showdown"

import App from "./App.vue"
import router from "./router"
import './assets/tailwind.css'

const app = createApp(App)

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

app.mount("#app")
