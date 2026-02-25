/** Soft-skills list for section content. */
export interface SoftSkill {
  title: string
  description: string
}

export const softSkillsData: SoftSkill[] = [
  {
    title: 'Communication & documentation',
    description:
      'Maintaining steady, respectful communication; writing clear documentation, code comments, and reports; explaining technical concepts clearly to colleagues (developers, QA, managers) and non-technical stakeholders (product managers, clients).'
  },
  {
    title: 'Teamwork',
    description:
      'Collaborating constructively, sharing knowledge, supporting colleagues, resolving conflicts, contributing to project success, using collaboration tools (Git, Jira, task boards).'
  },
  {
    title: 'Problem solving',
    description:
      'Finding effective solutions to complex problems, decomposing issues, analyzing requirements, identifying root causes of bugs, weighing pros and cons of approaches, thinking logically.'
  },
  {
    title: 'Adaptability & learning',
    description:
      'Getting up to speed quickly with the stack at hand; adapting to new frameworks, languages, methodologies, and to changing priorities and project requirements.'
  },
  {
    title: 'Time management',
    description:
      'Planning time effectively, estimating task duration realistically, prioritizing, meeting deadlines, handling multiple tasks without sacrificing quality.'
  },
  {
    title: 'Critical thinking',
    description: 'Asking the right questions, assessing risks, and proposing improvements.'
  },
  {
    title: 'Empathy & business context',
    description:
      'Understanding why the product exists, who the end user is, and which solutions add value in context; able to put myself in the user’s or colleague’s shoes.'
  },
  {
    title: 'Reliability & accountability',
    description:
      'Taking on commitments and delivering on time, owning mistakes, taking initiative to fix issues, being someone the team can rely on.'
  },
  {
    title: 'Stress resilience',
    description:
      'Staying calm, rational, and productive under tight deadlines, changing conditions, and demanding tasks.'
  },
  {
    title: 'Constructive feedback',
    description:
      'Accepting criticism and using it for growth (e.g. in code review); giving feedback tactfully, objectively, and to the point.'
  }
]
