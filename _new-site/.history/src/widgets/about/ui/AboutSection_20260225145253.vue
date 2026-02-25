<script setup lang="ts">
import { ref, computed } from 'vue'

/** About / profile: stats, experience highlights. */
const selectedCompany = ref<string | null>(null)
function toggleCompany(company: string) {
  selectedCompany.value = selectedCompany.value === company ? null : company
}
const selectedExperience = computed(() =>
  experience.find((e) => e.company === selectedCompany.value)
)
const stats = [
  { value: '14', label: 'Years Exp' },
  { value: '120+', label: 'Projects' },
  { value: '07', label: 'Companies' },
  { value: 'J++', label: 'Skill Level' }
]
type ExperienceDesc = {
  rating?: string
  about?: string
  location: string
  position: string
  period: string
  responsibilities: string
  technologies: string[]
}

const experience: Array<{
  company: string
  role: string
  tag: string
  year: string
  description: ExperienceDesc
}> = [
  {
    company: 'Xsolla',
    role: 'UI/UX Layout Developer',
    tag: 'GAMEDEV / EXPERIMENTAL',
    year: '2022',
    description: {
      rating: '4.22',
      about: 'Hub of services for games.',
      location: 'Tyumen, 100-1000 employees.',
      position: 'Frontend developer (middle) • UI/UX layout developer.',
      period: 'May 2022 — September 2022 (5 months).',
      responsibilities:
        'Worked in experimental projects team of Xsolla, global leader in in-game acquiring, developing cutting-edge frontend for innovative prototypes; participated in creation of proof-of-concept projects supporting advanced research initiatives in the gaming industry.',
      technologies: [
        'HTML',
        'JavaScript',
        'BEM',
        'landing page layout',
        'valid markup',
        'cross-browser markup',
        'CSS',
        'adaptive markup',
        'SCSS'
      ]
    }
  },
  {
    company: 'UPROCK',
    role: 'Frontend Developer',
    tag: 'AWWWARDS AGENCY',
    year: '2017',
    description: {
      about:
        'Focused on business task resolution, develops websites, services and mobile applications.',
      location: 'Saint Petersburg, 10-100 employees.',
      position: 'Frontend developer (intern) • front-end developer.',
      period: 'March 2017 — July 2017 (5 months).',
      responsibilities:
        'Developed websites on Angular, BEM, Stylus with exceptional attention to details, including pixel-perfect precision.',
      technologies: ['JavaScript', 'HTML', 'landing page layout', 'Angular']
    }
  },
  {
    company: 'Icons8',
    role: 'Frontend Developer',
    tag: 'PRODUCT / INTERNATIONAL',
    year: '2016',
    description: {
      rating: '4.37',
      about:
        'Develops software for designers, including realistic photo constructor Moose, graphic editor Lunacy, multiple APIs and icon sets.',
      location: 'Buenos Aires, 100-1000 employees.',
      position: 'Frontend developer (junior) • front-end developer.',
      period: 'February 2016 — September 2016 (8 months).',
      responsibilities:
        'Contributed to development and support of frontend for icons8.com platform used by designers worldwide; collaborated with international team on interface improvements and user experience optimization.',
      technologies: ['JavaScript', 'Vue.js', 'SCSS', 'HTML', 'valid markup']
    }
  },
  {
    company: 'Redis Agency',
    role: 'Layout Developer',
    tag: 'DESIGN STUDIO / BRANDS',
    year: '2015',
    description: {
      about:
        'Ideal design partner for brands and corporations: 5 boutiques and design factory with multidisciplinary art directors.',
      location: 'Tver, 10-100 employees.',
      position: 'Frontend developer (middle).',
      period: 'April 2015 — July 2015 (4 months).',
      responsibilities:
        'Developed frontend for presentation websites in renowned design studio, implementing complex animations and interactive functions; participated in projects for major brands and startups, solving creative tasks to achieve advanced design solutions.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'BEM', 'valid markup']
    }
  },
  {
    company: 'HOLMAX',
    role: 'Frontend Developer',
    tag: 'BRANDING / WEB',
    year: '2014–15',
    description: {
      about: 'Branding and web development.',
      location: 'Tver, 10-100 employees.',
      position: 'Frontend developer (middle) • front-end developer.',
      period: 'September 2014 — April 2015 (8 months).',
      responsibilities:
        'Developed landing pages, catalog websites and online stores; participated in design and development of studio corporate website.',
      technologies: [
        'JavaScript',
        'CSS',
        'HTML',
        'valid markup',
        'landing page layout',
        'cross-browser markup',
        'adaptive markup',
        'BEM'
      ]
    }
  },
  {
    company: 'WBB',
    role: 'Frontend Developer',
    tag: 'AWWWARDS PROJECTS',
    year: '2012',
    description: {
      about: 'Veles Volynsky Brand Bureau.',
      location: 'Tver.',
      position: 'Frontend developer (junior) • front-end developer.',
      period: 'June 2012 — August 2012 (3 months).',
      responsibilities:
        'Specialized in creation of interactive and animated web elements for brand projects and presentation websites using advanced JavaScript libraries and CSS animations; contributed to Awwwards-awarded projects demonstrating high-level web design and development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'animation creation']
    }
  },
  {
    company: 'Complex Systems',
    role: 'Web Developer',
    tag: 'E-COMMERCE / CORPORATE',
    year: '2011–12',
    description: {
      location: 'Tver.',
      position: 'Web developer (middle) • web technologist and layout specialist.',
      period: 'December 2011 — May 2012 (6 months).',
      responsibilities:
        'Developed and maintained frontend for online stores and corporate websites, ensuring cross-browser compatibility and adaptive design; participated in state project for public procurement accounting system, contributing to frontend and user interface implementation.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'adaptive markup']
    }
  }
]
</script>

<template>
  <section id="about" class="about">
    <div class="about__left">
      <div class="about__num-wrap reveal-trigger">
        <h2 class="about__num"><span class="reveal-text">[01] — PROFILE</span></h2>
      </div>
      <div v-if="selectedCompany && selectedExperience?.description" class="about__description-wrap">
        <dl class="about__desc">
          <template v-if="selectedExperience.description.rating">
            <dt class="about__desc-label">Rating</dt>
            <dd class="about__desc-value about__desc-value--accent">
              {{ selectedExperience.description.rating }}
            </dd>
          </template>
          <template v-if="selectedExperience.description.about">
            <dt class="about__desc-label">About</dt>
            <dd class="about__desc-value">{{ selectedExperience.description.about }}</dd>
          </template>
          <dt class="about__desc-label">Location</dt>
          <dd class="about__desc-value">{{ selectedExperience.description.location }}</dd>
          <dt class="about__desc-label">Position</dt>
          <dd class="about__desc-value">{{ selectedExperience.description.position }}</dd>
          <dt class="about__desc-label">Period</dt>
          <dd class="about__desc-value about__desc-value--period">
            {{ selectedExperience.description.period }}
          </dd>
          <dt class="about__desc-label">Work</dt>
          <dd class="about__desc-value about__desc-value--body">
            {{ selectedExperience.description.responsibilities }}
          </dd>
          <dt class="about__desc-label">Stack</dt>
          <dd class="about__desc-value about__desc-tags">
            <span
              v-for="t in selectedExperience.description.technologies"
              :key="t"
              class="about__desc-tag"
            >
              {{ t }}
            </span>
          </dd>
        </dl>
      </div>
    </div>
    <div class="about__content reveal-trigger">
      <h3 class="about__headline">
        <span class="reveal-text block">Over 14&nbsp;years shaping the web&nbsp;&mdash; from legacy systems to&nbsp;cutting-edge AI-assisted development.</span>
      </h3>
      <div class="about__stats reveal-text delay-100">
        <div v-for="s in stats" :key="s.label" class="about__stat">
          <span class="about__stat-value">{{ s.value }}</span>
          <span class="about__stat-label">{{ s.label }}</span>
        </div>
      </div>
      <h4 class="about__sub"><span class="reveal-text delay-300">EXPERIENCE HIGHLIGHTS</span></h4>
      <div class="about__rows reveal-trigger">
        <div
          v-for="e in experience"
          :key="e.company"
          class="about__row reveal-text"
          :class="{ 'about__row--selected': selectedCompany === e.company }"
          role="button"
          tabindex="0"
          @click="toggleCompany(e.company)"
          @keydown.enter.space.prevent="toggleCompany(e.company)"
        >
          <div class="about__row-col about__row-col--left">
            <h5 class="about__company">{{ e.company }}</h5>
            <span class="about__role">{{ e.role }}</span>
          </div>
          <div class="about__row-col about__row-col--right">
            <span class="about__tag">{{ e.tag }}</span>
            <span class="about__year">{{ e.year }}</span>
          </div>
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
@media (min-width: 768px) {
  .about {
    grid-template-columns: repeat(12, 1fr);
    gap: 3rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
@media (min-width: 768px) {
  .about__left {
    grid-column: 1 / span 4;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
.about__num-wrap {
  margin-bottom: 0;
}
.about__num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #ccff00;
  position: sticky;
  top: 24px;
}
.about__description-wrap {
  max-height: min(60vh, 400px);
  overflow-y: auto;
}
@media (min-width: 768px) {
}
.about__desc {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.35rem 1rem;
  align-items: baseline;
}
.about__desc-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #444;
  white-space: nowrap;
  padding-top: 0.15rem;
}
.about__desc-value {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.55;
  color: #888;
  margin: 0;
}
.about__desc-value--accent,
.about__desc-value--period {
  color: #ccff00;
}
.about__desc-value--body {
  color: #555;
}
.about__desc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.about__desc-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #555;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
}
@media (min-width: 768px) {
  .about__content {
    grid-column: 5 / span 8;
  }
}
.about__rows {
  display: contents;
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
@media (min-width: 768px) {
  .about__stats {
    grid-template-columns: repeat(4, 1fr);
  }
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
  will-change: background-color;
  cursor: pointer;
}
.about__row:hover {
  background: rgba(255, 255, 255, 0.05);
}
.about__row--selected {
  background: rgba(255, 255, 255, 0.08);
}
.about__row--selected .about__company {
  color: #ccff00;
}
@media (min-width: 768px) {
  .about__row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.about__row-col {
  flex: 0 0 auto;
}
.about__row-col--right {
  display: flex;
  align-items: center;
  gap: 2rem;
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
</style>
