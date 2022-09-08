import React, { FC } from "react";
import { AddTodoDto, TodoInList } from "src/interfaces";

type TProps = {
  todo: TodoInList | undefined;
  edit(id: number, todo: AddTodoDto): Promise<void>;
};

const Todo: FC<TProps> = ({ todo, edit }) => {
  return (
    <div>
      <div>{todo?.id}</div>
      <div>{todo?.name}</div>
      <div>{todo?.desc}</div>
      <div>{todo?.done}</div>
    </div>
  );
};

export default Todo;
