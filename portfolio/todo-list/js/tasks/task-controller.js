/**
 * Controller: владеет текущим состоянием, обрабатывает события View
 * и координирует Model, Repository и View.
 * Импортирует только Model; View и Repository получены из app.js.
 */

import {
  createTask,
  addTask,
  toggleTask,
  deleteTask,
  findTaskIndex,
} from "./task-model.js";

const STORAGE_MESSAGE = {
  unavailable: "storage-unavailable",
  corrupt: "storage-corrupt",
  "write-failed": "storage-write-failed",
};

function hasUuidApi() {
  return typeof globalThis.crypto?.randomUUID === "function";
}

/**
 * @param {{ view: Object, repository: Object }} dependencies
 */
export function createTaskController({ view, repository }) {
  let tasks = [];

  function persist(nextTasks) {
    const result = repository.save(nextTasks);
    tasks = nextTasks;
    return result;
  }

  function handleSubmit() {
    const text = view.getInputValue().trim();
    view.showMessage("");

    if (text === "") {
      view.showMessage("empty-input");
      view.focusInput();
      return;
    }

    if (!hasUuidApi()) {
      view.showMessage("id-unavailable");
      view.focusInput();
      return;
    }

    const task = createTask(text, globalThis.crypto.randomUUID());
    const result = persist(addTask(tasks, task));

    view.clearInput();
    view.render(tasks);
    view.focusInput();
    view.showMessage(result.ok ? "added" : "storage-write-failed");
  }

  function handleToggle(event) {
    const row = event.target.closest(".task-item");
    if (!row) {
      return;
    }

    const taskId = row.dataset.taskId;
    const result = persist(toggleTask(tasks, taskId));

    view.showMessage(result.ok ? "" : "storage-write-failed");
    view.render(tasks, { focus: { taskId } });
  }

  function handleDelete(event) {
    const row = event.target.closest(".task-item");
    if (!row) {
      return;
    }

    const taskId = row.dataset.taskId;
    const removedIndex = findTaskIndex(tasks, taskId);
    if (removedIndex === -1) {
      return;
    }

    const result = persist(deleteTask(tasks, taskId));
    view.showMessage(result.ok ? "deleted" : "storage-write-failed");

    if (tasks.length === 0) {
      view.render(tasks);
      view.focusInput();
      return;
    }

    view.render(tasks, {
      focus: { index: Math.min(removedIndex, tasks.length - 1) },
    });
  }

  function init() {
    const { tasks: loadedTasks, error } = repository.load();
    tasks = loadedTasks;

    view.onFormSubmit(handleSubmit);
    view.onListChange(handleToggle);
    view.onListClick(handleDelete);
    view.render(tasks);

    if (error) {
      view.showMessage(STORAGE_MESSAGE[error]);
    }
  }

  return { init };
}
