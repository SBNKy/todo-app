export const createProject = (name) => ({
    id: crypto.randomUUID(),
    name,
    todos: [],
    createdAt: new Date().toISOString()
});
    
export const createTodo = (title, dueDate, description) => ({
    id: crypto.randomUUID(),
    title,
    dueDate,
    description,
    createdAt: new Date().toISOString()
});

