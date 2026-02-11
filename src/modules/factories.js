export const createProject = (name) => ({
    id: crypto.randomUUID(),
    name,
    todos: []
});
    
export const createTodo = (title, dueDate, description) => ({
    id: crypto.randomUUID(),
    title,
    dueDate,
    description,
    createdAt: Date.now()
});

