import { AddTodoDto, EditTodo } from "src/interfaces";
import { hosts } from "src/api/hosts";

export const getTodos = async () => {
  const response = await fetch(`${hosts.remote}/todos`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getTodo = async (id: number | null) => {
  if (!id) return;
  const response = await fetch(`${hosts.remote}/todos/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const postTodo = async (todo: AddTodoDto) => {
  try {
    await fetch(`${hosts.remote}/todos`, {
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
    await fetch(`${hosts.remote}/todos/${id}`, {
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
    await fetch(`${hosts.remote}/todos/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
};
