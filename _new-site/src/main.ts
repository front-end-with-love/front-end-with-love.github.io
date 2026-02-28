// Создание Vue-приложения (createApp) — точка входа
import { createApp } from 'vue'
// Pinia — официальный state management для Vue 3
import { createPinia } from 'pinia'
// GSAP — библиотека анимаций; ScrollTrigger привязывает анимации к скроллу
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Корневой компонент приложения (курсор, router-view)
import App from '@/app/App.vue'
// Роутер — маршрутизация (одна страница: landing)
import { router } from '@/app/providers/router'
// Глобальные стили (шрифты, переменные, базовые правила)
import '@/style.css'

// Регистрация плагина ScrollTrigger в GSAP — без этого ScrollTrigger.create() не работает
gsap.registerPlugin(ScrollTrigger)

// Создаём экземпляр приложения, подключаем Pinia и роутер, монтируем в #app
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
