const projectsContainer = document.querySelector(".project-container");

function clearProjectsContainer() {
    projectsContainer.innerHTML = "";
}

export const UI = {
    renderProject: (project) => {
        // clearProjectsContainer();
        const projectSection = document.createElement("section");
        projectSection.classList.add("project-section");

        const sectionHeader = document.createElement("h2");
        sectionHeader.textContent = project.name;

        const todoList = document.createElement("ul");

        UI.renderTodos(project.todos, todoList);

        projectSection.appendChild(sectionHeader);
        projectSection.appendChild(todoList);

        projectsContainer.appendChild(projectSection);
    },

    renderTodos: (todos, todoList) => {
        todos.forEach(todo => {
            const todoListItem = document.createElement("li");
            
            const itemTitle = document.createElement("h2");
            itemTitle.textContent = todo.title;

            const itemDate = document.createElement("p");
            itemDate.classList.add("todo-item-date");
            itemDate.textContent = todo.dueDate;
            
            const itemDesc = document.createElement("p");
            itemDesc.classList.add("todo-item-description");
            itemDesc.textContent = todo.description;
            
            todoListItem.appendChild(itemTitle);
            todoListItem.appendChild(itemDate);
            todoListItem.appendChild(itemDesc);

            todoList.appendChild(todoListItem);
        })
    },
};

function createDeleteTodoBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "&times;"; // Prosty X
    deleteBtn.setAttribute("aria-label", "Usuń"); // Dostępność

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Żeby kliknięcie w X nie rozwijało zadania (jeśli masz taką funkcję)
        onDelete(todo.id);
    });
}
