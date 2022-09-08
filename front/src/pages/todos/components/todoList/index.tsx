import React, { FC } from "react";
import { TodoInList } from "src/interfaces";

type TProps = {
  todos: TodoInList[];
  del(id: number): Promise<void>;
  setTodoId: React.Dispatch<React.SetStateAction<number | null>>;
};

const TodoList: FC<TProps> = ({ todos, setTodoId, del }) => {
  const deleteTodo = async (id: number) => {
    await del(id);
  };
  return (
    <ul>
      {todos &&
        todos.map((todo: any) => (
          <li key={todo.id}>
            <div style={{ display: "flex" }}>
              <div
                style={{ marginRight: 100 }}
                onClick={() => setTodoId(todo.id)}
              >
                {todo.name}
              </div>
              <div onClick={() => deleteTodo(todo.id)}>X</div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
