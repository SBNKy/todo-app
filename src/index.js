import "./style.css";
import { UI } from "./modules/ui.js";
import { createTodo } from "./modules/factories.js";
import { AppManager } from "./modules/appManager.js";

const addProjectBtn = document.querySelector(".add-project-btn");
const projectDialog = document.querySelector("#project-dialog");
const projectForm = document.querySelector("#project-form");
const projectFormSubmitBtn = document.querySelector(".modal-submit-btn");

const task1 = createTodo(
    "update header",
    "2026-09-02",
    "A really long description that in reality isn't that long!",
);
const task2 = createTodo("add styling", "2026-09-02");

const project1 = AppManager.addProject("make an application");
// AppManager.addTodo(project1.id, task1.title, task1.dueDate);
// AppManager.addTodo(project1.id, task2.title, task2.dueDate);

const project2 = AppManager.addProject("make a header");
AppManager.addTodo(project1.id, task2.title, task2.dueDate);
AppManager.addTodo(project2.id, task1.title, task1.dueDate);

addProjectBtn.addEventListener("click", () => {
    UI.openProjectDialog();
});

projectDialog.addEventListener("close", () => {
    projectForm.reset();
});

projectFormSubmitBtn.addEventListener("click", () => {
    const formData = new FormData(projectForm);

    const newProjectName = formData.get("name");
    AppManager.addProject(newProjectName);
});
