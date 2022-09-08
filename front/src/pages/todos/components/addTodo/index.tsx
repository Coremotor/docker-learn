import React, { FC, useState } from "react";
import { AddTodoDto } from "src/interfaces";

type TProps = {
  create(todo: AddTodoDto): Promise<void>;
};

const AddTodo: FC<TProps> = ({ create }) => {
  const [todo, setTodo] = useState<AddTodoDto>({
    name: "",
    desc: "",
    done: false,
  });

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const add = () => {
    create(todo).then(() =>
      setTodo({
        name: "",
        desc: "",
        done: false,
      })
    );
  };

  return (
    <div>
      <input
        onInput={onInput}
        type="text"
        id="name"
        name="name"
        value={todo.name}
      />
      <input
        onInput={onInput}
        type="text"
        id="desc"
        name="desc"
        value={todo.desc}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddTodo;
