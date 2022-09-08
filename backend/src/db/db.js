class Db {
  constructor(todos) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  editTodo(id, data) {
    const todo = this.getTodo(id);
    const newTodo = { ...todo, ...data };
    this.todos = this.todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

const database = new Db([
  { id: 1, name: "todo_1", desc: "desc1", done: false },
  { id: 2, name: "todo_2", desc: "desc2", done: false },
  { id: 3, name: "todo_3", desc: "desc3", done: true },
  { id: 4, name: "todo_4", desc: "desc4", done: true },
]);

module.exports = database;
