import { createProject, createTodo } from "./factories.js";
import { UI } from "./ui.js";
import { Storage } from "./storage.js";

export const AppManager = {
    projects: [],

    init() {
        const storedProjects = Storage.getProjects();
        console.log(storedProjects);

        if (storedProjects.length > 0) {
            this.projects = storedProjects;
            UI.renderProjects(this.projects);
        }
    },

    addProject(name) {
        if (!name) return;

        const newProject = createProject(name);
        this.projects.push(newProject);

        this.saveAndRender();

        return newProject;
    },

    addTodo(projectID, title, dueDate, description = "") {
        if (!title || !dueDate) return;

        const activeProject = this.projects.find(
            (project) => project.id === projectID,
        );

        if (!activeProject) {
            console.log("No active project with this given ID");
            return;
        }

        const newTodo = createTodo(title, dueDate, description);
        activeProject.todos.push(newTodo);

        this.saveAndRender();
    },

    saveAndRender() {
        Storage.saveProjects(this.projects);
        UI.renderProjects(this.projects);
    }
};
