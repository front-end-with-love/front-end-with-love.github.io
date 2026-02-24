import { createApp } from 'vue'
import { createPinia } from 'pinia'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import App from '@/app/App.vue'
import { router } from '@/app/providers/router'
import '@/style.css'

gsap.registerPlugin(ScrollTrigger)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
