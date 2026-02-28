<script setup lang="ts">
// Корневой компонент: определение touch-устройства, разметка кастомного курсора, вывод router-view.

// ref из Vue — реактивная ссылка; при изменении .value шаблон перерисовывается
import { ref, onMounted, onUnmounted } from 'vue'

// true = touch-устройство (планшет/телефон) — кастомный курсор не показываем
const isTouch = ref(false)

// onMounted — хук жизненного цикла Vue: выполняется после монтирования компонента в DOM
onMounted(() => {
  // Проверка: есть ли touch-события или заявлены точки касания
  isTouch.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  // На десктопе скрываем системный курсор — показываем свои .cursor-dot и .cursor-ring
  if (!isTouch.value) document.body.classList.add('cursor-hidden')
})

// onUnmounted — хук при размонтировании: снимаем классы с body (курсор, hover-состояние)
onUnmounted(() => {
  document.body.classList.remove('cursor-hidden', 'hover-active')
})
</script>

<template>
  <!-- v-if="!isTouch" — рендерим разметку курсора только на десктопе; для скринридеров скрыто -->
  <template v-if="!isTouch">
    <div class="cursor-dot" aria-hidden="true" />
    <div class="cursor-ring" aria-hidden="true" />
  </template>
  <!-- router-view — слот для отображаемого по текущему маршруту компонента (здесь LandingPage) -->
  <router-view />
</template>
