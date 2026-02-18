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
                const todoContainer = document.createElement("ul");

                this.renderTodos(project.id, project.todos, todoContainer);
                projectSection.appendChild(todoContainer);
            }

            const addTaskBtn = createAddTaskBtn(project.id);

            projectSection.appendChild(addTaskBtn);

            projectsContainer.appendChild(projectSection);
        });
    },

    renderTodos(projectID, todos, todoContainer) {
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
            
            todoListItem.appendChild(itemHeader);

            if (todo.description) {
                const itemDesc = document.createElement("p");
                itemDesc.classList.add("todo-item-description");
                itemDesc.textContent = todo.description;
                todoListItem.appendChild(itemDesc);
            }

            const deleteTodoBtn = createDeleteTodoBtn(projectID, todo.id);

            todoListItem.appendChild(deleteTodoBtn);

            todoContainer.appendChild(todoListItem);
        });
    },

    openProjectDialog() {
        projectDialog.showModal();
    },

    closeProjectDialog() {
        projectDialog.close();
    },

    openTaskDialog() {
        taskDialog.showModal();
    },

    closeTaskDialog() {
        taskDialog.close();
    }
};

function createDeleteTodoBtn(projectID, todoId) {
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("delete-todo-btn");
    deleteTaskBtn.dataset.projectId = projectID;
    deleteTaskBtn.dataset.todoId = todoId;
    deleteTaskBtn.textContent = "Delete";

    return deleteTaskBtn;
}

function createAddTaskBtn(projectID) {
    const btn = document.createElement("button");
    btn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>';

    btn.classList.add("add-task-btn");

    btn.addEventListener("click", () => {
        document.querySelector("#form-project-id").value = projectID;

        taskDialog.showModal();
    });

    const spanText = document.createElement("span");
    spanText.classList.add("add-task-text");
    spanText.textContent = "Add a new Task";

    btn.appendChild(spanText);

    return btn;
}