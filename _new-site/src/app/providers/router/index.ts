// createRouter — фабрика роутера Vue Router; createWebHistory — история через HTML5 History API (без # в URL)
import { createRouter, createWebHistory } from 'vue-router'
// Массив маршрутов: путь, имя, компонент
import { routes } from './routes'

// Экспортируемый роутер: одна страница по умолчанию, lazy-загрузка через import()
export const router = createRouter({
  history: createWebHistory(),
  routes
})
