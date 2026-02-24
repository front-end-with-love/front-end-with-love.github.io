<script setup lang="ts">
/** About / profile: stats, experience highlights. */
const stats = [
  { value: '14', label: 'Years Exp' },
  { value: '20+', label: 'Projects' },
  { value: '07', label: 'Companies' },
  { value: 'J++', label: 'Skill Level' }
]
const experience = [
  { company: 'Xsolla', role: 'UI/UX Layout Developer', tag: 'GAMEDEV / EXPERIMENTAL', year: '2022' },
  { company: 'UPROCK', role: 'Frontend Developer', tag: 'AWWWARDS AGENCY', year: '2017' },
  { company: 'Icons8', role: 'Frontend Developer', tag: 'PRODUCT / INTERNATIONAL', year: '2016' },
  { company: 'Redis Agency', role: 'Frontend Developer', tag: 'DESIGN STUDIO / BRANDS', year: '2015' },
  { company: 'HOLMAX', role: 'Frontend Developer', tag: 'BRANDING / WEB', year: '2014–15' },
  { company: 'WBB', role: 'Frontend Developer', tag: 'AWWWARDS PROJECTS', year: '2012' },
  { company: 'Комплексные системы', role: 'Web Developer', tag: 'E-COMMERCE / CORPORATE', year: '2011–12' }
]
</script>

<template>
  <section id="about" class="about">
    <h2 class="about__num">[01] — PROFILE</h2>
    <div class="about__content">
      <h3 class="about__headline">
        Over 14 years of defining the web, evolving from legacy systems to cutting-edge AI-assisted development.
      </h3>
      <div class="about__stats">
        <div v-for="s in stats" :key="s.label" class="about__stat">
          <span class="about__stat-value">{{ s.value }}</span>
          <span class="about__stat-label">{{ s.label }}</span>
        </div>
      </div>
      <h4 class="about__sub">EXPERIENCE HIGHLIGHTS</h4>
      <div v-for="e in experience" :key="e.company" class="about__row">
        <div>
          <h5 class="about__company">{{ e.company }}</h5>
          <span class="about__role">{{ e.role }}</span>
        </div>
        <div class="about__meta">
          <span class="about__tag">{{ e.tag }}</span>
          <span class="about__year">{{ e.year }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 8rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.about__num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #ccff00;
  margin-bottom: 2rem;
  position: sticky;
  top: 8rem;
}
.about__headline {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  line-height: 1.2;
  margin-bottom: 3rem;
}
.about__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;
}
.about__stat {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 1rem;
}
.about__stat:hover {
  border-color: #ccff00;
}
.about__stat-value {
  font-family: var(--font-display);
  display: block;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.about__stat:hover .about__stat-value {
  color: #ccff00;
}
.about__stat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #888;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.about__sub {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}
.about__row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1rem;
  margin: 0 -1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s;
}
.about__row:hover {
  background: rgba(255, 255, 255, 0.05);
}
.about__company {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
}
.about__row:hover .about__company {
  color: #ccff00;
}
.about__role {
  font-size: 0.875rem;
  color: #888;
}
.about__meta {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.about__tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #888;
}
.about__year {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #fff;
}
@media (min-width: 768px) {
  .about {
    grid-template-columns: repeat(12, 1fr);
    gap: 3rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .about__num {
    grid-column: 1 / span 4;
  }
  .about__content {
    grid-column: 5 / span 8;
  }
  .about__stats {
    grid-template-columns: repeat(4, 1fr);
  }
  .about__row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
