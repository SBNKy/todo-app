import "./style.css";
import { UI } from "./modules/ui.js";
import { createProject, createTodo } from "./modules/factories.js";
import { AppManager } from "./modules/appManager.js";



const task1 = createTodo("update header", "2026-09-02");
const task2 = createTodo("add styling", "2026-09-02");


const project1 = AppManager.addProject("make an application");
AppManager.addTodo(project1.id, task1.title, task1.dueDate);
AppManager.addTodo(project1.id, task2.title, task2.dueDate);

const project2 = AppManager.addProject("make a header");
AppManager.addTodo(project2.id, task2.title, task2.dueDate);
AppManager.addTodo(project2.id, task1.title, task1.dueDate);


