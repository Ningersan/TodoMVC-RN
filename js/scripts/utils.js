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

export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
