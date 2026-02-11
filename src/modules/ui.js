const projectsContainer = document.querySelector(".project-container");
const projectDialog = document.querySelector("#project-dialog");
const taskDialog = document.querySelector("#task-dialog");

function clearProjectsContainer() {
    projectsContainer.innerHTML = "";
}

export const UI = {
    renderProjects(projects) {
        clearProjectsContainer();

        projects.forEach((project) => {
            const projectSection = document.createElement("section");
            projectSection.classList.add("project-section");

            const sectionHeader = document.createElement("h2");
            sectionHeader.textContent = project.name;

            projectSection.appendChild(sectionHeader);

            if (project.todos.length > 0) {
                const todoList = document.createElement("ul");
                
                this.renderTodos(project.todos, todoList);
                projectSection.appendChild(todoList);
            }

            const addTaskBtn = createAddTaskBtn(project.id);

            projectSection.appendChild(addTaskBtn);

            projectsContainer.appendChild(projectSection);
        });
    },

    renderTodos(todos, todoList) {
        todos.forEach((todo) => {
            const todoListItem = document.createElement("li");

            const itemHeader = document.createElement("div");
            itemHeader.classList.add("todo-item-header");

            const itemTitle = document.createElement("span");
            itemTitle.classList.add("todo-item-title");
            itemTitle.textContent = todo.title;

            const itemDate = document.createElement("span");
            itemDate.classList.add("todo-item-date");
            itemDate.textContent = todo.dueDate;

            itemHeader.appendChild(itemTitle);
            itemHeader.appendChild(itemDate);

            const itemDesc = document.createElement("p");
            itemDesc.classList.add("todo-item-description");
            itemDesc.textContent = todo.description;

            todoListItem.appendChild(itemHeader);
            todoListItem.appendChild(itemDesc);

            todoList.appendChild(todoListItem);
        });
    },

    openProjectDialog() {
        projectDialog.showModal();
    },
};

function createAddTaskBtn(projectID) {
    const btn = document.createElement("button");
    btn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>';

    btn.classList.add("add-task-btn");

    btn.addEventListener("click", () => {
        taskDialog.dataset.currentProjectId = projectID;

        taskDialog.showModal();
    });

    const spanText = document.createElement("span");
    spanText.classList.add("add-task-text");
    spanText.textContent = "Add a new Task";

    btn.appendChild(spanText);

    return btn;
}

// function createDeleteTodoBtn() {
//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.innerHTML = "&times;"; // Prosty X
//     deleteBtn.setAttribute("aria-label", "Usuń"); // Dostępność

//     deleteBtn.addEventListener("click", (e) => {
//         e.stopPropagation(); // Żeby kliknięcie w X nie rozwijało zadania (jeśli masz taką funkcję)
//         onDelete(todo.id);
//     });
// }
