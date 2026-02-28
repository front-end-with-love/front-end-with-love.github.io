// Данные для секции «Образование»: колледж и курсы (карточки в сетке).

// Тип одной записи: место, программа, период, описание, массив тегов стека
export type EducationItem = {
  place: string
  program: string
  period: string
  description: string
  stack: string[]
}

export const educationData: EducationItem[] = [
  {
    place: 'Bezhetsk Industrial and Economic College',
    program: 'Programming',
    period: '2008 — 2011',
    description:
      'Core vocational education in programming. Mastered algorithms, data structures, development principles, applied problem-solving; higher mathematics, discrete mathematics, probability theory.',
    stack: ['Algorithms', 'Data Structures', 'Programming fundamentals', 'Higher Mathematics', 'Discrete Mathematics', 'Probability Theory']
  },
  {
    place: 'Javascript.ru',
    program: 'JavaScript / DOM / Interfaces (for beginners)',
    period: 'Mar 2023 — May 2023 (2 mo.)',
    description:
      'Completed the course at learn.javascript.ru to systematize knowledge. Covered basics (variables, data types, conditionals) and advanced topics: DOM, Promises, async/await, ES6+ (arrows, destructuring, modules).',
    stack: ['JavaScript', 'DOM', 'Promises', 'async/await', 'ES6+']
  },
  {
    place: 'Hexlet',
    program: 'JavaScript: Asynchronous Programming',
    period: 'Jun 2023 — Aug 2023 (3 mo.)',
    description:
      'Completed the course to confidently work with async code in real projects. Mastered Event Loop, error handling, REST API integration, and complex request flows.',
    stack: ['JavaScript', 'Event Loop', 'REST API', 'async/await']
  }
]
