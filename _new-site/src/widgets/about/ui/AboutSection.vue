<script setup lang="ts">
// Секция «Обо мне»: статистика, блок опыта — выбор компании раскрывает описание (about, location, achievements, stack).

import { ref, computed } from 'vue'

// Выбранная компания: при клике на карточку сюда записывается company, показывается блок about__description-wrap
const selectedCompany = ref<string | null>(null)

function toggleCompany(company: string) {
  selectedCompany.value = selectedCompany.value === company ? null : company
}

// computed — производное значение: запись experience с company === selectedCompany (для v-if и вывода полей)
const selectedExperience = computed(() =>
  experience.find((e) => e.company === selectedCompany.value)
)
const stats = [
  { value: '14', label: 'Years Exp' },
  { value: '120+', label: 'Freelance projects' },
  { value: '07', label: 'Companies' },
  { value: 'J++', label: 'Skill Level' }
]
type ExperienceDesc = {
  about?: string
  location: string
  position: string
  period: string
  achievements: string[]
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
      about: 'A hub of services for games.',
      location: 'Tyumen, 100-1000 employees.',
      position: 'Frontend developer (middle) • UI/UX layout developer.',
      period: 'May 2022 — September 2022 (5 months).',
      achievements: [
        'Delivered proof-of-concept frontends for innovative in-game acquiring prototypes',
        'Built cutting-edge UI for experimental research initiatives in gaming',
        'Collaborated with design team on rapid prototype iterations',
        'Participated in creation of PoC projects supporting advanced R&D'
      ],
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
        'An agency focused on business problem-solving, developing websites, services, and mobile applications.',
      location: 'Saint Petersburg, 10-100 employees.',
      position: 'Frontend developer (intern) • front-end developer.',
      period: 'March 2017 — July 2017 (5 months).',
      achievements: [
        'Built pixel-perfect layouts for award-winning agency projects',
        'Implemented responsive sites with Angular and BEM methodology',
        'Developed websites with Stylus and exceptional attention to detail',
        'Contributed to Awwwards-targeted quality deliverables'
      ],
      technologies: ['JavaScript', 'HTML', 'landing page layout', 'Angular']
    }
  },
  {
    company: 'Icons8',
    role: 'Frontend Developer',
    tag: 'PRODUCT / INTERNATIONAL',
    year: '2016',
    description: {
      about:
        'Develops software for designers, including stock photo platform Moose, graphic editor Lunacy, multiple APIs and icon sets.',
      location: 'Buenos Aires, 100-1000 employees.',
      position: 'Frontend developer (junior) • front-end developer.',
      period: 'February 2016 — September 2016 (8 months).',
      achievements: [
        'Maintained and enhanced icons8.com frontend used by designers worldwide',
        'Implemented interface improvements for the stock and icon platform',
        'Collaborated with international team on UX optimization',
        'Contributed to frontend support and consistent cross-browser behavior'
      ],
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
        'An ideal design partner for brands and corporations: 5 boutiques and a design factory with multidisciplinary art directors.',
      location: 'Tver, 10-100 employees.',
      position: 'Frontend developer (middle).',
      period: 'April 2015 — July 2015 (4 months).',
      achievements: [
        'Implemented complex animations and interactive features for brand presentation sites',
        'Delivered frontend for major brand and startup projects',
        'Solved creative challenges with advanced design solutions',
        'Built presentation websites from design specs with BEM and jQuery'
      ],
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
      achievements: [
        'Built landing pages, catalog sites and online stores from design specs',
        'Participated in design and development of the studio corporate website',
        'Delivered cross-browser and adaptive layouts with valid markup',
        'Maintained consistent BEM structure across multiple projects'
      ],
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
      achievements: [
        'Created interactive and animated web elements for Awwwards-level brand projects',
        'Contributed to presentation websites with advanced JS libraries and CSS animations',
        'Delivered high-quality implementations for brand bureau clients',
        'Demonstrated pixel-perfect execution in award-targeted deliverables'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'animation creation']
    }
  },
  {
    company: 'Complex Systems',
    role: 'Web Developer',
    tag: 'E-COMMERCE / CORPORATE',
    year: '2011–12',
    description: {
      about:
        'E-commerce and corporate web development; government and commercial projects.',
      location: 'Tver.',
      position: 'Web developer (middle) • web technologist and layout specialist.',
      period: 'December 2011 — May 2012 (6 months).',
      achievements: [
        'Developed and maintained frontend for online stores and corporate websites',
        'Ensured cross-browser compatibility and responsive design across projects',
        'Contributed to government project for public procurement accounting system',
        'Implemented user interface and frontend logic for commercial and state clients'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'adaptive markup']
    }
  }
]
</script>

<template>
  <section id="about" class="about">
    <div class="about__left">
      <div class="about__num-wrap reveal-trigger">
        <h2 class="about__num"><span class="reveal-text" aria-hidden="true">[01] — </span><span class="reveal-text">Profile</span></h2>
      </div>
      <!-- Блок описания компании показывается только при выборе и наличии description -->
      <div v-if="selectedCompany && selectedExperience?.description" class="about__description-wrap">
        <dl class="about__desc">
          <template v-if="selectedExperience.description.about">
            <dt class="about__desc-label">About</dt>
            <dd class="about__desc-value">{{ selectedExperience.description.about }}</dd>
          </template>
          <dt class="about__desc-label">Location</dt>
          <dd class="about__desc-value">{{ selectedExperience.description.location }}</dd>
          <dt class="about__desc-label">Position</dt>
          <dd class="about__desc-value">{{ selectedExperience.description.position }}</dd>
          <dt class="about__desc-label">Period</dt>
          <dd class="about__desc-value">{{ selectedExperience.description.period }}</dd>
          <dt class="about__desc-label">Achievements</dt>
          <dd class="about__desc-value about__desc-achievements">
            <ul class="about__bullets">
              <li
                v-for="(a, ai) in selectedExperience.description.achievements"
                :key="ai"
                class="about__bullet"
              >
                <span class="about__bullet-arrow">&rarr;</span>
                {{ a }}
              </li>
            </ul>
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
        <template v-for="(e, index) in experience" :key="e.company">
          <div
            class="about__row reveal-text hover-trigger"
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
          <div
            v-if="selectedCompany === e.company"
            class="about__description-wrap about__description-wrap--mobile"
          >
            <dl class="about__desc">
              <template v-if="e.description.about">
                <dt class="about__desc-label">About</dt>
                <dd class="about__desc-value">{{ e.description.about }}</dd>
              </template>
              <dt class="about__desc-label">Location</dt>
              <dd class="about__desc-value">{{ e.description.location }}</dd>
              <dt class="about__desc-label">Position</dt>
              <dd class="about__desc-value">{{ e.description.position }}</dd>
              <dt class="about__desc-label">Period</dt>
              <dd class="about__desc-value">{{ e.description.period }}</dd>
              <dt class="about__desc-label">Achievements</dt>
              <dd class="about__desc-value about__desc-achievements">
                <ul class="about__bullets">
                  <li v-for="(a, ai) in e.description.achievements" :key="ai" class="about__bullet">
                    <span class="about__bullet-arrow">&rarr;</span>
                    {{ a }}
                  </li>
                </ul>
              </dd>
              <dt class="about__desc-label">Stack</dt>
              <dd class="about__desc-value about__desc-tags">
                <span
                  v-for="t in e.description.technologies"
                  :key="t"
                  class="about__desc-tag"
                >
                  {{ t }}
                </span>
              </dd>
            </dl>
            <button
              v-if="index < experience.length - 1"
              type="button"
              class="about__next-btn hover-trigger"
              :aria-label="`Next experience: ${experience[index + 1].company}`"
              @click="selectedCompany = experience[index + 1].company"
            >
              Next: {{ experience[index + 1].company }}
            </button>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 8rem 1rem 6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
@media (min-width: 768px) {
  .about {
    grid-template-columns: repeat(12, 1fr);
    gap: 3rem;
    padding: 8rem 3rem;
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
  min-height: 55vh;
  max-height: 80vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #333 var(--color-black);
}
.about__description-wrap::-webkit-scrollbar {
  width: 6px;
}
.about__description-wrap::-webkit-scrollbar-track {
  background: var(--color-black);
}
.about__description-wrap::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}
.about__description-wrap::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent);
}
.about__description-wrap--mobile {
  position: relative;
  margin-bottom: 1rem;
  padding: 1rem 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  min-height: 55vh;
  max-height: 80vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #333 var(--color-black);
}
.about__description-wrap--mobile::-webkit-scrollbar {
  width: 6px;
}
.about__description-wrap--mobile::-webkit-scrollbar-track {
  background: var(--color-black);
}
.about__description-wrap--mobile::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}
.about__description-wrap--mobile::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent);
}
@media (min-width: 768px) {
  .about__description-wrap--mobile {
    display: none;
  }
  .about__left .about__description-wrap {
    position: sticky;
    top: calc(24px + 2rem);
  }
}
@media (max-width: 767px) {
  .about__left .about__description-wrap {
    display: none;
  }
}
.about__next-btn {
  display: block;
  margin-top: 1rem;
  padding: 0.5rem 0;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ccff00;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: opacity 0.2s;
}
.about__next-btn:hover {
  opacity: 0.85;
}
@media (min-width: 768px) {
  .about__next-btn {
    display: none;
  }
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
.about__desc-value--accent {
  color: #ccff00;
}
.about__desc-achievements {
  grid-column: 1 / -1;
  margin: 0.2rem 0 0.2rem 0;
}
.about__bullets {
  list-style: none;
  padding: 0;
  margin: 0;
}
.about__bullet {
  font-family: var(--font-mono);
  display: flex;
  gap: 0.75rem;
  font-size: 0.75rem;
  line-height: 1.55;
  color: var(--color-offwhite);
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}
.about__bullet-arrow {
  color: #888;
  opacity: 0.6;
  flex-shrink: 0;
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
  margin: 0;
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
