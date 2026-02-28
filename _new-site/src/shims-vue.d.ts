/// <reference types="vite/client" />
// Объявление модулей *.vue для TypeScript: импорт .vue файла возвращает DefineComponent
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
