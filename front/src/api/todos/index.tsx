import { AddTodoDto, EditTodo } from "src/interfaces";

export const getTodos = async () => {
  const response = await fetch("http://localhost:8090/todos");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getTodo = async (id: number | null) => {
  if (!id) return;
  const response = await fetch(`http://localhost:8090/todos/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const postTodo = async (todo: AddTodoDto) => {
  try {
    await fetch("http://localhost:8090/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(todo),
    });
  } catch (e) {
    console.log(e);
  }
};

export const editTodo = async (data: EditTodo) => {
  const { id, todo } = data;
  try {
    await fetch(`http://localhost:8090/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(todo),
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await fetch(`http://localhost:8090/todos/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
};
