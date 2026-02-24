<script setup lang="ts">
/** Contact: intro, links, footer. */
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__top reveal-trigger">
      <span class="contact__num reveal-text">[04]&nbsp;&mdash; CONTACT</span>
      <h2 class="contact__title">
        <span class="reveal-text delay-100 block">Let's<br /></span>
        <span class="contact__title-outline reveal-text delay-300">Talk</span>
      </h2>
    </div>
    <div class="contact__grid reveal-trigger">
      <div class="contact__info reveal-text">
        <p class="contact__intro">
          Open for new opportunities. Ready for code verification and technical interviews.<br><br>Russia, Tver.
        </p>
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
          Habr
        </a>
      </div>
    </div>
    <footer class="contact__footer">
      <div>
        <p>&copy;&nbsp;2026&nbsp;MIKHAIL&nbsp;KHLEBNIKOV</p>
        <p>ALL&nbsp;RIGHTS RESERVED</p>
      </div>
      <div class="contact__footer-right">
        <p>BUILT WITH VARIANT.COM + CURSOR + LLM</p>
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
}
.contact__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
.contact__intro {
  font-size: 1.25rem;
  color: #888;
  max-width: 28rem;
  margin-bottom: 2rem;
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
}
.contact__link:hover {
  color: #ccff00;
}
.contact__links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.contact__footer {
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  padding-top: 2rem;
  margin-top: 6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 10px;
  color: #555;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.contact__footer-right {
  text-align: right;
}
@media (min-width: 768px) {
  .contact {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .contact__grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  .contact__footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>
