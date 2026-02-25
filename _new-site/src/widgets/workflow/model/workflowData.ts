/** Workflow methodology steps for slider section. */
export interface WorkflowStep {
  title: string
  summary: string
  description: string
}

export const workflowData: WorkflowStep[] = [
  {
    title: 'Discovery',
    summary: 'Brief · Scope · UI constraints · Technical boundaries',
    description:
      'Requirement analysis. Clarification of layout constraints, CMS or framework limitations. Definition of breakpoints, grid logic and content variability. Formalization of acceptance criteria. Task decomposition into structured backlog items with clear UI states.'
  },
  {
    title: 'Architecture',
    summary: 'BEM · UI structure · Scalability · Maintainability',
    description:
      'UI decomposition into independent BEM blocks. Definition of CSS architecture and file structure (block-based separation). State modeling (modifiers, UI variants). Preparation of scalable layout structure for future features. Clear separation of layout, logic and configuration layers.'
  },
  {
    title: 'Implementation',
    summary: 'Semantic HTML · SCSS/SASS · JS · Next/Nuxt · Pixel-Perfect',
    description:
      'Semantic and accessible HTML markup. SCSS/SASS architecture aligned with BEM methodology. Pixel-perfect implementation based on design system constraints. JavaScript logic with clear separation of concerns. Integration into Next.js or Nuxt.js environment when required. Focus on clean, predictable and maintainable code.'
  },
  {
    title: 'Quality Control',
    summary: 'Cross-browser · Responsive · Performance · A11y',
    description:
      'Cross-browser validation (Chrome, Firefox, Safari, Edge). Responsive behaviour verification across breakpoints. Layout stress-testing with dynamic content. Accessibility checks (semantic structure, keyboard navigation, contrast). Performance verification without unnecessary abstractions.'
  },
  {
    title: 'Delivery',
    summary: 'Git workflow · Structured commits · Documentation',
    description:
      'Feature-based branching strategy. Structured and traceable commits. Clean pull request review. Final UI polish. Documentation of block structure and integration rules. Predictable handoff for further development or scaling.'
  }
]