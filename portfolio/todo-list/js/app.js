/**
 * Composition root: создаёт View и Repository, передаёт их Controller
 * и запускает приложение. Без бизнес-логики и рендеринга.
 */

import { createTaskView } from "./tasks/task-view.js";
import { createTaskRepository } from "./tasks/task-repository.js";
import { createTaskController } from "./tasks/task-controller.js";

const view = createTaskView(document);
const repository = createTaskRepository();
const controller = createTaskController({ view, repository });

controller.init();
