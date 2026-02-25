/** Workflow methodology steps for slider section. */
export interface WorkflowStep {
  title: string
  summary: string
  description: string
}

export const workflowData: WorkflowStep[] = [
  {
    title: 'Brief',
    summary: 'Task intake · Requirements · User stories · Backlog',
    description:
      'Task intake. Requirements elicitation. Client goal mapping. Functional and non-functional specification. Decomposition into user stories, acceptance criteria and task backlog.'
  },
  {
    title: 'Design',
    summary: 'Figma · Design system · Motion · Accessibility',
    description:
      'Figma prototype review and sign-off. Atomic component library creation. Design system definition (tokens, grids, typography scale). Motion and micro-interaction planning. Responsive breakpoints validation. Accessibility audit at design stage.'
  },
  {
    title: 'Build',
    summary: 'HTML5 · CSS · React/Vue · ESLint · Performance',
    description:
      'Semantic HTML5 structure. CSS architecture (BEM / CSS Modules / Tailwind). Vanilla JS or framework implementation (React / Vue). Component-based modular code. ESLint + Prettier enforcement. Performance budgeting from first line of code.'
  },
  {
    title: 'Review',
    summary: 'Cross-browser · QA · Lighthouse · WAVE · axe',
    description:
      'Cross-browser matrix testing (Chrome, Firefox, Safari, Edge). Device and viewport QA. Automated unit / integration tests. Manual exploratory testing. Peer code review. Lighthouse, Web Vitals, WAVE and axe audits. Iterative fixes until 100/100 scores.'
  },
  {
    title: 'Deploy',
    summary: 'Git Flow · CI/CD · Vercel · Storybook · Handoff',
    description:
      'Git Flow branching model (feature / release / hotfix). CI/CD pipeline (GitHub Actions). Automated build, test and deploy to Vercel / Netlify / custom hosting. Versioned documentation (README, component Storybook, API specs). Client handoff package with source, build instructions and maintenance guide.'
  }
]
