export const filter = {
    all(todos) {
        return todos
    },
    active(todos) {
        return todos.filter(todo => !todo.isCompleted)
    },
    completed(todos) {
        return todos.filter(todo => todo.isCompleted)
    },
}
