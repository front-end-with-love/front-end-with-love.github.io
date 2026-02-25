/** Soft-skills list for section content. */
export interface SoftSkill {
  title: string
  summary: string
  description: string
}

export const softSkillsData: SoftSkill[] = [
  {
    title: 'Communication & documentation',
    summary: 'Docs · Reports · Clarity',
    description:
      'Maintaining steady, respectful communication; writing clear documentation, code comments, and reports; explaining technical concepts clearly to colleagues (developers, QA, managers) and non-technical stakeholders (product managers, clients).'
  },
  {
    title: 'Teamwork',
    summary: 'Collaboration · Git · Jira',
    description:
      'Collaborating constructively, sharing knowledge, supporting colleagues, resolving conflicts, contributing to project success, using collaboration tools (Git, Jira, task boards).'
  },
  {
    title: 'Problem solving',
    summary: 'Decomposition · Root cause',
    description:
      'Finding effective solutions to complex problems, decomposing issues, analyzing requirements, identifying root causes of bugs, weighing pros and cons of approaches, thinking logically.'
  },
  {
    title: 'Adaptability & learning',
    summary: 'Quick ramp-up · New stack',
    description:
      'Getting up to speed quickly with the stack at hand; adapting to new frameworks, languages, methodologies, and to changing priorities and project requirements.'
  },
  {
    title: 'Time management',
    summary: 'Priorities · Deadlines',
    description:
      'Planning time effectively, estimating task duration realistically, prioritizing, meeting deadlines, handling multiple tasks without sacrificing quality.'
  },
  {
    title: 'Critical thinking',
    summary: 'Risks · Improvements',
    description: 'Asking the right questions, assessing risks, and proposing improvements.'
  },
  {
    title: 'Empathy & business context',
    summary: 'User · Value · Context',
    description:
      'Understanding why the product exists, who the end user is, and which solutions add value in context; able to put myself in the user’s or colleague’s shoes.'
  },
  {
    title: 'Reliability & accountability',
    summary: 'On time · Initiative',
    description:
      'Taking on commitments and delivering on time, owning mistakes, taking initiative to fix issues, being someone the team can rely on.'
  },
  {
    title: 'Stress resilience',
    summary: 'Calm · Productive',
    description:
      'Staying calm, rational, and productive under tight deadlines, changing conditions, and demanding tasks.'
  },
  {
    title: 'Constructive feedback',
    summary: 'Code review · Growth',
    description:
      'Accepting criticism and using it for growth (e.g. in code review); giving feedback tactfully, objectively, and to the point.'
  }
]
