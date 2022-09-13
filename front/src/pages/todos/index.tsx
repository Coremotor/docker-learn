import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos } from "src/api/todos";
import { UseQueryResult } from "@tanstack/react-query/src/types";
import { AddTodoDto, QueryError, TodoInList } from "src/interfaces";
import TodoList from "src/components/todoList";
import AddTodo from "src/components/addTodo";
import Todo from "src/components/todo";

import { Container } from "@chakra-ui/react";
import { QueryKeys, todosModels } from "src/models/todos";

const Todos = () => {
  const queryClient = useQueryClient();
  const {
    addTodoMutation,
    deleteTodoMutation,
    editTodoMutation,
    useGetTodoById,
  } = todosModels(queryClient);

  const [todoId, setTodoId] = useState<number | null>(null);

  const todosQuery: UseQueryResult<TodoInList[], QueryError> = useQuery(
    [QueryKeys.todos],
    getTodos
  );

  const todoQuery = useGetTodoById(todoId);

  const create = async (todo: AddTodoDto) => {
    await addTodoMutation.mutateAsync(todo);
  };

  const edit = async (id: number, todo: AddTodoDto) => {
    await editTodoMutation.mutateAsync({ id, todo });
  };

  const del = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
  };

  useEffect(() => {
    todoQuery.refetch().then(() => null);
  }, [todoId]);

  if (todosQuery.isLoading) {
    return <span>Loading...</span>;
  }

  if (todosQuery.isError) {
    return <span>Error: {todosQuery.error.message}</span>;
  }

  return (
    <Container>
      <TodoList
        todoId={todoId}
        todos={todosQuery.data}
        del={del}
        setTodoId={setTodoId}
        isLoading={todosQuery.isLoading}
      />
      <AddTodo create={create} />
      {todosQuery.data.some((todo) => todo.id === todoId) && (
        <Todo todo={todoQuery.data} edit={edit} />
      )}
    </Container>
  );
};

export default Todos;
