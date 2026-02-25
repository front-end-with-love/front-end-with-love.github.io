<script setup lang="ts">
/** Contact: intro, links, footer. */
import photo from '@/assets/img/1.jpeg'
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__top reveal-trigger">
      <div class="contact__text-wrapper">
        <span class="contact__num reveal-text">[05]&nbsp;&mdash; CONTACT</span>
        <h2 class="contact__title">
          <span class="reveal-text delay-100 block">Let's<br /></span>
          <span class="contact__title-outline reveal-text delay-300">Talk</span>
        </h2>
      </div>
      <img :src="photo" alt="Mikhail Khlebnikov" class="contact__photo reveal-text" />
    </div>
    <div class="contact__grid reveal-trigger">
      <div class="contact__info reveal-text">
        <p class="contact__intro">
          Open for new opportunities. Ready for code verification and technical interviews.
        </p>
        <ul class="contact__availability reveal-text">
          <li><span class="contact__availability-label">Location</span> Russia, Tver</li>
          <li><span class="contact__availability-label">Timezone</span> UTC+3 · Moscow · Async-friendly</li>
          <li><span class="contact__availability-label">Status</span> Open to work</li>
          <li><span class="contact__availability-label">Format</span> Remote · Full-time · Freelance</li>
        </ul>
      </div>
      <div class="contact__links reveal-text delay-200">
        <a href="mailto:frontend.dev.ru@gmail.com" class="contact__link hover-trigger">frontend.dev.ru@gmail.com</a>
        <a href="https://t.me/michailkhlebnikov" target="_blank" rel="noopener noreferrer" class="contact__link hover-trigger">
          t.me/michailkhlebnikov
        </a>
        <a href="https://github.com/front-end-with-love" target="_blank" rel="noopener noreferrer" class="contact__link hover-trigger">
          Github Account
        </a>
        <a href="https://career.habr.com/frontend-dev-ru" target="_blank" rel="noopener noreferrer" class="contact__link hover-trigger">
          Habr Career
        </a>
      </div>
    </div>
    <footer class="contact__footer">
      <div class="contact__footer-col contact__footer-col--left">
        <p>&copy;&nbsp;2026&nbsp;MIKHAIL&nbsp;KHLEBNIKOV<br>ALL&nbsp;RIGHTS RESERVED</p>
      </div>
      <div class="contact__footer-col contact__footer-col--right">
        <p>BUILT WITH MY&nbsp;BRAINS AND<br>VARIANT.COM/CURSOR.COM</p>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8rem 1rem 2rem;
  background: #050505;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
@media (min-width: 768px) {
  .contact {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.contact__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
}
.contact__text-wrapper {
  flex: 1 1 auto;
}
.contact__photo {
  width: clamp(120px, 20vw, 220px);
  height: clamp(120px, 20vw, 220px);
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
  display: block;
  margin: 3.5rem 1.5rem 3.5rem auto;
}
.contact__num {
  font-family: var(--font-mono);
  display: block;
  font-size: 0.75rem;
  color: #ccff00;
  margin-bottom: 2rem;
}
.contact__title {
  font-family: var(--font-display);
  font-size: clamp(4rem, 18vw, 20rem);
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  margin-bottom: 3rem;
  mix-blend-mode: exclusion;
}
.contact__title-outline {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  color: transparent;
  display: block;
}
.contact__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
@media (max-width: 767px) {
  .contact__grid {
    gap: 2rem;
  }
}
@media (min-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}
.contact__intro {
  font-size: 1.25rem;
  color: #888;
  max-width: 28rem;
  margin-bottom: 2rem;
}
.contact__availability {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  font-size: 0.875rem;
  color: #888;
}
.contact__availability li {
  margin-bottom: 0.5rem;
}
.contact__availability-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #737373;
  margin-right: 0.5rem;
}
.contact__availability-accent {
  color: #ccff00;
}
.contact__link {
  font-family: var(--font-display);
  display: block;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #e1e1e1;
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  text-decoration-color: #555;
  margin-bottom: 1rem;
  transition: color 0.3s;
  will-change: color;
}
.contact__link:hover {
  color: #ccff00;
}
.contact__links {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}
.contact__footer {
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 2rem;
  margin-top: 6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 10px;
  color: #555;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .contact__footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
.contact__footer-col {
  flex: 0 0 auto;
}
.contact__footer-col--left {
  text-align: left;
} 
.contact__footer-col--right {
  text-align: right;
}
@media (max-width: 767px) {
  .contact__footer-col--left,
  .contact__footer-col--right {
    text-align: center;
  }
}
</style>
