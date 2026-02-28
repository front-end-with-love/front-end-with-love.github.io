// Тип маршрута Vue Router — path, name, component и др.
import type { RouteRecordRaw } from 'vue-router'

// Единственный маршрут: корень — лендинг; компонент загружается лениво (chunk при первом заходе)
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/pages/landing')
  }
]
