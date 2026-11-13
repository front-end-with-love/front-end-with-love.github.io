/**
 * Repository: единственное место доступа к localStorage.
 * Наружу отдаёт результат-объект и никогда не выбрасывает исключения.
 */

const STORAGE_KEY = "todo-list.tasks.v1";
const SCHEMA_VERSION = 1;

function readStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidTask(value) {
  if (!isPlainObject(value)) {
    return false;
  }
  if (typeof value.id !== "string" || value.id.trim() === "") {
    return false;
  }
  if (typeof value.text !== "string" || value.text.trim() === "") {
    return false;
  }
  return typeof value.completed === "boolean";
}

/**
 * Отбрасывает невалидные записи и дубликаты ID, сохраняя порядок валидных.
 */
function normalizeTasks(rawTasks) {
  const tasks = [];
  const seenIds = new Set();
  let dropped = 0;

  for (const rawTask of rawTasks) {
    if (!isValidTask(rawTask) || seenIds.has(rawTask.id)) {
      dropped += 1;
      continue;
    }
    seenIds.add(rawTask.id);
    tasks.push({
      id: rawTask.id,
      text: rawTask.text,
      completed: rawTask.completed,
    });
  }

  return { tasks, dropped };
}

/**
 * @returns {{ tasks: Array, error: null | 'unavailable' | 'corrupt' }}
 */
function load() {
  const storage = readStorage();
  if (!storage) {
    return { tasks: [], error: "unavailable" };
  }

  let rawValue;
  try {
    rawValue = storage.getItem(STORAGE_KEY);
  } catch {
    return { tasks: [], error: "unavailable" };
  }

  if (rawValue === null) {
    return { tasks: [], error: null };
  }

  let parsed;
  try {
    parsed = JSON.parse(rawValue);
  } catch {
    return { tasks: [], error: "corrupt" };
  }

  if (
    !isPlainObject(parsed) ||
    parsed.version !== SCHEMA_VERSION ||
    !Array.isArray(parsed.tasks)
  ) {
    return { tasks: [], error: "corrupt" };
  }

  const { tasks, dropped } = normalizeTasks(parsed.tasks);

  return { tasks, error: dropped > 0 ? "corrupt" : null };
}

/**
 * Записывает полный массив задач.
 * При отказе возвращает ошибку; состояние в памяти обновляет Controller,
 * поэтому задачи текущей сессии остаются доступными до перезагрузки.
 *
 * @param {Array} tasks
 * @returns {{ ok: boolean, error: null | 'write-failed' }}
 */
function save(tasks) {
  const storage = readStorage();
  if (!storage) {
    return { ok: false, error: "write-failed" };
  }

  try {
    storage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: SCHEMA_VERSION, tasks }),
    );
    return { ok: true, error: null };
  } catch {
    return { ok: false, error: "write-failed" };
  }
}

export function createTaskRepository() {
  return { load, save };
}
