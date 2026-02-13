import "./style.css";
import { UI } from "./modules/ui.js";
import { createTodo } from "./modules/factories.js";
import { AppManager } from "./modules/appManager.js";
import { startOfToday, parseISO, isBefore } from "date-fns";

const addProjectBtn = document.querySelector(".add-project-btn");
const projectDialog = document.querySelector("#project-dialog");
const projectForm = document.querySelector("#project-form");
const projectFormSubmitBtn = document.querySelector(".project-submit-btn");
const projectCancelBtn = document.querySelector("#project-cancel-btn");
const taskDialog = document.querySelector("#task-dialog");
const taskForm = document.querySelector("#task-form");
const taskFormSubmitBtn = document.querySelector(".task-submit-btn");
const taskCancelBtn = document.querySelector("#task-cancel-btn");

const task1 = createTodo(
    "update header",
    "2026-09-02",
    "A really long description that in reality isn't that long!",
);
const task2 = createTodo("add styling", "2026-09-02");

const project1 = AppManager.addProject("make an application");

const project2 = AppManager.addProject("make a header");
AppManager.addTodo(project1.id, task2.title, task2.dueDate, task1.description);
AppManager.addTodo(project2.id, task1.title, task1.dueDate);

addProjectBtn.addEventListener("click", () => {
    UI.openProjectDialog();
});

projectDialog.addEventListener("close", () => {
    projectForm.reset();
});

projectForm.addEventListener("submit", () => {
    const formData = new FormData(projectForm);

    const newProjectName = formData.get("name");
    AppManager.addProject(newProjectName);
});

projectCancelBtn.addEventListener("click", (e) => {
    UI.closeProjectDialog();
})

taskDialog.addEventListener("close", () => {
    taskForm.reset();
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(taskForm);

    const projectID = formData.get("project-id");
    const newTaskTitle = formData.get("title");
    const newTaskDescription = formData.get("description");
    const newTaskDueDate = formData.get("date");

    const today = startOfToday();
    if (isBefore(parseISO(newTaskDueDate), today)) {
        alert("The date cannot be in the past.");
        return;
    }

    AppManager.addTodo(
        projectID,
        newTaskTitle,
        newTaskDueDate,
        newTaskDescription,
    );

    UI.closeTaskDialog();
});

taskCancelBtn.addEventListener("click", () => {
    UI.closeTaskDialog();
})