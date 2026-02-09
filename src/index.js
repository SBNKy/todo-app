import "./style.css";
import { UI } from "./modules/ui.js";
import { createProject, createTodo } from "./modules/factories.js";


const project = createProject("make an application");
const task1 = createTodo("update header", "2026-09-02");
const task2 = createTodo("add styling", "2026-09-02");

project.todos.push(task1, task2);

const project2 = createProject("make an application");

project2.todos.push(task1, task2);

UI.renderProject(project);
UI.renderProject(project2);
