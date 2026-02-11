import { createProject, createTodo } from "./factories.js";
import { UI } from "./ui.js";

export const AppManager = {
    projects: [],

    addProject(name) {
        if (!name) return;

        const newProject = createProject(name);
        this.projects.push(newProject);
        UI.renderProjects(this.projects);
        return newProject;
    },

    addTodo(projectID, title, dueDate, description = "") {
        if (!title || !dueDate) return;

        const activeProject = this.projects.find(
            (project) => project.id === projectID,
        );
        
        if (!activeProject) console.log("No active project with this given ID");

        const newTodo = createTodo(title, dueDate, description);
        activeProject.todos.push(newTodo);
    },
};
