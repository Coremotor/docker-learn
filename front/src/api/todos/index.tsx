import { AddTodoDto, EditTodo } from "src/interfaces";
import { host } from "src/api/hosts";

export const getTodos = async () => {
  const response = await fetch(`${host}/todos`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getTodo = async (id: number | null) => {
  if (!id) return;
  const response = await fetch(`${host}/todos/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const postTodo = async (todo: AddTodoDto) => {
  try {
    await fetch(`${host}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
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
    await fetch(`${host}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(todo),
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await fetch(`${host}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (e) {
    console.log(e);
  }
};
