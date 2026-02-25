<script setup lang="ts">
/** Landing page: composition of widgets (loader, nav, hero, marquee, about, soft-skills, projects, stack, contact). */
import bgImg from '@/assets/img/2.jpg'
import bgImg2 from '@/assets/img/3.pmg'
import { LoaderScreen } from '@/widgets/loader'
import { LandingNav } from '@/widgets/nav'
import { HeroSection } from '@/widgets/hero'
import { MarqueeBanner } from '@/widgets/marquee'
import { AboutSection } from '@/widgets/about'
import { SoftSkillsSection } from '@/widgets/soft-skills'
import { ProjectsSection } from '@/widgets/projects'
import { StackSection } from '@/widgets/stack'
import { ContactSection } from '@/widgets/contact'
import { useCursor } from '@/features/cursor'
import { useHoverTrigger } from '@/features/hover-trigger'
import { useReveal } from '@/features/reveal'

useCursor()
useHoverTrigger()
useReveal('.reveal-trigger, section')
</script>

<template>
  <div
    class="landing-page"
    :style="{ backgroundImage: `url(${bgImg}), url(${bgImg2})` }"
  >
    <LoaderScreen />
    <LandingNav />
    <div class="landing-page__sidebar">
      <a
        href="https://github.com/front-end-with-love"
        target="_blank"
        rel="noopener noreferrer"
        class="landing-page__sidebar-link hover-trigger"
      >GH</a>
      <a
        href="https://t.me/michailkhlebnikov"
        target="_blank"
        rel="noopener noreferrer"
        class="landing-page__sidebar-link hover-trigger"
      >TG</a>
    </div>
    <main class="landing-page__main">
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <SoftSkillsSection />
      <ProjectsSection />
      <StackSection />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
.landing-page {
  position: relative;
  min-height: 100vh;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000000ab;
  }
}
.landing-page__sidebar {
  position: fixed;
  bottom: 0.2rem;
  left: 1.55rem;
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  mix-blend-mode: difference;
  color: #e1e1e1;
}
@media (max-width: 767px) {
  .landing-page__sidebar {
    display: none;
  }
}
.landing-page__sidebar-link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: inherit;
  text-decoration: none;
  transform: rotate(-90deg);
  transform-origin: left;
  transition: color 0.3s;
  will-change: color;
}
.landing-page__sidebar-link:hover {
  color: #ccff00;
}
.landing-page__main {
  position: relative;
  z-index: 10;
}
</style>
