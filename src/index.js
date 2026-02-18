import "./style.css";
import { UI } from "./modules/ui.js";
import { AppManager } from "./modules/appManager.js";
import { startOfToday, parseISO, isBefore } from "date-fns";

const addProjectBtn = document.querySelector(".add-project-btn");
const projectDialog = document.querySelector("#project-dialog");
const projectForm = document.querySelector("#project-form");
const projectCancelBtn = document.querySelector("#project-cancel-btn");

const taskDialog = document.querySelector("#task-dialog");
const taskForm = document.querySelector("#task-form");
const taskCancelBtn = document.querySelector("#task-cancel-btn");

const projectsContainer = document.querySelector(".project-container");

AppManager.init();

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
});

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
});


projectsContainer.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-todo-btn");

    if (!deleteBtn) return;

    const { projectId, todoId } = deleteBtn.dataset;

    AppManager.deleteTodo(projectId, todoId);
});