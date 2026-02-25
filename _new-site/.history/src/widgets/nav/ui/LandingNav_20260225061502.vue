<script setup lang="ts">
/** Fixed top nav: logo, status, menu button scrolls to contact. */
function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav class="landing-nav">
    <div class="landing-nav__col landing-nav__col--left">
      <a href="#" class="landing-nav__logo">
        <span class="landing-nav__logo-text">MH</span>
        <span class="landing-nav__logo-sub">PORTFOLIO 2026</span>
      </a>
    </div>
    <div class="landing-nav__col landing-nav__col--center">
      <div class="landing-nav__meta">
        <div class="landing-nav__status">
          <span class="landing-nav__status-dot" />
          Open to work
        </div>
        <div class="landing-nav__location">Based in Worldwide</div>
      </div>
    </div>
    <div class="landing-nav__col landing-nav__col--right">
      
      <button type="button" class="landing-nav__menu hover-trigger" aria-label="Menu" @click="scrollToContact">
        <span class="landing-nav__menu-line landing-nav__menu-line--first" />
        <span class="landing-nav__menu-line landing-nav__menu-line--second" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.landing-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 40;
  mix-blend-mode: difference;
  color: #e1e1e1;
  pointer-events: none;
}
.landing-nav__col {
  display: flex;
  align-items: flex-start;
  pointer-events: auto;
}
.landing-nav__col--left {
  flex: 0 0 auto;
}
.landing-nav__col--center {
  flex: 1;
  min-width: 0;
}
.landing-nav__col--right {
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}
.landing-nav__logo {
  color:#ccff00;
  text-decoration: none;
}
.landing-nav__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}
@media (max-width: 767px) {
  .landing-nav__meta {
    display: none;
  }
}
.landing-nav__logo-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  transition: color 0.3s;
}
.landing-nav__logo:hover .landing-nav__logo-text {
  color: #ccff00;
}
.landing-nav__logo-sub {
  font-family: var(--font-mono);
  display: block;
  font-size: 10px;
  letter-spacing: 0.2em;
  opacity: 0.5;
  margin-top: 0.25rem;
}
.landing-nav__status {
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ccff00;
}
.landing-nav__status-dot {
  width: 8px;
  height: 8px;
  background: #ccff00;
  border-radius: 50%;
  animation: nav-pulse 2s ease-in-out infinite;
}
@keyframes nav-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.landing-nav__location {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #888;
}
.landing-nav__menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: none;
}
.landing-nav__menu-line {
  height: 1px;
  background: #fff;
  transition: width 0.3s;
}
.landing-nav__menu-line--first {
  width: 3rem;
}
.landing-nav__menu-line--second {
  width: 2rem;
  transition-delay: 75ms;
}
.landing-nav__menu:hover .landing-nav__menu-line--first,
.landing-nav__menu:hover .landing-nav__menu-line--second {
  width: 4rem;
}
</style>
