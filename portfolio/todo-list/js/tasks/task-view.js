/**
 * View: кеширует DOM-узлы при создании и отвечает только за отображение.
 * Не импортирует Model и Repository.
 */

const MESSAGES = {
  added: "Задача добавлена.",
  deleted: "Задача удалена.",
  "empty-input": "Введите текст задачи.",
  "id-unavailable":
    "Не удалось создать задачу: браузер не поддерживает безопасную генерацию идентификатора. Откройте страницу по HTTPS в актуальном браузере.",
  "storage-unavailable":
    "Хранилище недоступно: задачи не сохранятся после перезагрузки.",
  "storage-corrupt":
    "Сохранённые данные повреждены. Показаны только задачи, которые удалось восстановить.",
  "storage-write-failed":
    "Не удалось сохранить изменения. Задачи останутся только до перезагрузки.",
};

/**
 * @param {Document} root
 */
export function createTaskView(root) {
  const form = root.querySelector("#task-form");
  const input = root.querySelector("#task-input");
  const container = root.querySelector("#task-list-container");
  const emptyState = root.querySelector("#task-list-empty");
  const status = root.querySelector("#app-status");
  const template = root.querySelector("#task-item-template");

  // Список <ul id="task-list"> живёт в DOM только пока есть задачи.
  // Пока задач нет, элемента нет вовсе: ни пустого <ul>, ни лишнего
  // отступа от него. Как только задача появилась, список создаётся,
  // а после удаления последней — удаляется из документа.
  let list = null;

  function ensureList() {
    if (!list) {
      list = document.createElement("ul");
      list.id = "task-list";
      list.className = "task-list__items";
      container.insertBefore(list, emptyState);
    }
    return list;
  }

  function removeList() {
    if (!list) {
      return;
    }
    list.remove();
    list = null;
  }

  function getRows() {
    return container.querySelectorAll(".task-item");
  }

  function createItem(task) {
    const item = template.content.firstElementChild.cloneNode(true);
    const checkbox = item.querySelector(".task-item__checkbox");
    const text = item.querySelector(".task-item__text");
    const deleteButton = item.querySelector(".task-item__delete");

    item.dataset.taskId = task.id;
    checkbox.checked = task.completed;
    text.textContent = task.text;
    // Имя кнопки включает текст задачи: в списке кнопок удаления каждая
    // получает различимое доступное имя.
    deleteButton.setAttribute("aria-label", `Удалить задачу: ${task.text}`);

    if (task.completed) {
      item.classList.add("task-item--completed");
    }

    return item;
  }

  function findRowById(taskId) {
    for (const row of getRows()) {
      if (row.dataset.taskId === taskId) {
        return row;
      }
    }
    return null;
  }

  function restoreFocus(focus) {
    if (focus === "input") {
      input.focus();
      return;
    }

    let row = null;
    if (focus && typeof focus.taskId === "string") {
      row = findRowById(focus.taskId);
    } else if (focus && typeof focus.index === "number") {
      row = getRows()[focus.index] ?? null;
    }

    const target = row ? row.querySelector(".task-item__checkbox") : null;
    if (target) {
      target.focus();
    } else {
      input.focus();
    }
  }

  /**
   * @param {Array} tasks
   * @param {{ focus?: 'input' | { taskId: string } | { index: number } | null }} [options]
   */
  function render(tasks, options = {}) {
    const { focus = null } = options;
    const fragment = document.createDocumentFragment();

    for (const task of tasks) {
      fragment.append(createItem(task));
    }

    // Пустой список не отрисовывается вовсе: элемент <ul id="task-list">
    // удаляется из DOM, его место занимает пустое состояние. При появлении
    // задач список создаётся заново и наполняется заново.
    if (tasks.length === 0) {
      removeList();
    } else {
      ensureList().replaceChildren(fragment);
    }

    emptyState.hidden = tasks.length > 0;

    if (focus) {
      restoreFocus(focus);
    }
  }

  function getInputValue() {
    return input.value;
  }

  function clearInput() {
    input.value = "";
  }

  function focusInput() {
    input.focus();
  }

  /**
   * @param {'' | 'added' | 'deleted' | 'empty-input' | 'id-unavailable'
   *   | 'storage-unavailable' | 'storage-corrupt' | 'storage-write-failed'} key
   */
  function showMessage(key) {
    const text = MESSAGES[key] ?? "";
    status.textContent = text;
    status.hidden = text === "";
  }

  function onFormSubmit(handler) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handler();
    });
  }

  // Подписки висят на постоянном контейнере, а не на самом списке:
  // <ul id="task-list"> создаётся и удаляется вместе с задачами, а
  // делегирование событий от контейнера работает в обоих случаях.
  function onListChange(handler) {
    container.addEventListener("change", (event) => {
      const target = event.target;
      if (target instanceof HTMLInputElement && target.type === "checkbox") {
        handler(event);
      }
    });
  }

  function onListClick(handler) {
    container.addEventListener("click", (event) => {
      if (event.target.closest(".task-item__delete")) {
        handler(event);
      }
    });
  }

  return {
    render,
    getInputValue,
    clearInput,
    focusInput,
    showMessage,
    onFormSubmit,
    onListChange,
    onListClick,
  };
}
