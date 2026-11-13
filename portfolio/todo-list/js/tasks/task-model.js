/**
 * Model: чистые операции над массивом задач.
 * Без DOM, CSS и localStorage — модуль ничего не импортирует.
 */

/**
 * @param {string} text
 * @param {string} id
 * @returns {{ id: string, text: string, completed: boolean }}
 */
export function createTask(text, id) {
  return { id, text, completed: false };
}

/**
 * @param {Array} tasks
 * @param {Object} task
 * @returns {Array}
 */
export function addTask(tasks, task) {
  return [...tasks, task];
}

/**
 * @param {Array} tasks
 * @param {string} id
 * @returns {Array}
 */
export function toggleTask(tasks, id) {
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );
}

/**
 * @param {Array} tasks
 * @param {string} id
 * @returns {Array}
 */
export function deleteTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

/**
 * Индекс задачи нужен контроллеру, чтобы восстановить фокус после удаления.
 *
 * @param {Array} tasks
 * @param {string} id
 * @returns {number}
 */
export function findTaskIndex(tasks, id) {
  return tasks.findIndex((task) => task.id === id);
}
