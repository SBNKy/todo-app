export const Storage = {
    saveProjects(projects) {
        localStorage.setItem("todoApp_projects", JSON.stringify(projects));
    },

    getProjects() {
        const projects = localStorage.getItem("todoApp_projects");

        return projects ? JSON.parse(projects) : [];
    },
};
