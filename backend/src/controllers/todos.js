const database = require("../db/db");

const getToDos = async (req, res) => {
  try {
    const todos = database.getTodos();
    return res.status(200).json(todos);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "todos error" });
  }
};

const getToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = database.getTodo(+id);
    if (todo) {
      return res.status(200).json(todo);
    } else {
      return res.status(400).json({ error: "todo not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "todos error" });
  }
};

const addToDo = async (req, res) => {
  try {
    const { name, desc, done } = req.body;
    await database.addTodo({ id: Date.now(), name, desc, done });
    const todos = database.getTodos();
    return res.status(201).json(todos);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "todos error" });
  }
};

const editToDo = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { name, desc, done } = req.body;

  try {
    database.editTodo(+id, { name, desc, done });
    const todo = database.getTodo(+id);
    if (todo) {
      return res.status(200).json(todo);
    } else {
      return res.status(500).json({ error: "something wrong in edit" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "todos error" });
  }
};

const deleteToDo = async (req, res) => {
  const { id } = req.params;
  try {
    await database.deleteTodo(+id);
    const todos = database.getTodos();
    return res.status(200).json(todos);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "todos error" });
  }
};

module.exports = { getToDos, getToDo, addToDo, editToDo, deleteToDo };
