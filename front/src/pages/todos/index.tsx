import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteTodo,
  editTodo,
  getTodo,
  getTodos,
  postTodo,
} from "src/api/todos";
import { UseQueryResult } from "@tanstack/react-query/src/types";
import { AddTodoDto, EditTodo, QueryError, TodoInList } from "src/interfaces";
import TodoList from "src/pages/todos/components/todoList";
import AddTodo from "src/pages/todos/components/addTodo";
import Todo from "src/pages/todos/components/todo";

import { Container, Heading } from "@chakra-ui/react";

export const QueryKeys = {
  todos: "todos",
  todo: "todo",
};

const Todos = () => {
  const queryClient = useQueryClient();

  const todosQuery: UseQueryResult<TodoInList[], QueryError> = useQuery(
    [QueryKeys.todos],
    getTodos
  );

  const [todoId, setTodoId] = useState<number | null>(null);

  const useGetTodoById = (id: number | null) => {
    return useQuery([QueryKeys.todo], () => getTodo(id), {
      refetchOnWindowFocus: false,
    });
  };

  const todoQuery = useGetTodoById(todoId);

  useEffect(() => {
    todoQuery.refetch().then(() => null);
  }, [todoId]);

  const addTodoMutation = useMutation(
    [QueryKeys.todos],
    (todo: AddTodoDto) => postTodo(todo),
    {
      onSuccess: async () =>
        await queryClient.invalidateQueries([QueryKeys.todos]),
    }
  );

  const deleteTodoMutation = useMutation(
    [QueryKeys.todos],
    (id: number) => deleteTodo(id),
    {
      onSuccess: async () =>
        await queryClient.invalidateQueries([QueryKeys.todos]),
    }
  );

  const editTodoMutation = useMutation(
    [QueryKeys.todos],
    (data: EditTodo) => editTodo(data),
    {
      onSuccess: async () =>
        await queryClient.invalidateQueries([QueryKeys.todos, QueryKeys.todo]),
    }
  );

  const create = async (todo: AddTodoDto) => {
    await addTodoMutation.mutateAsync(todo);
  };

  const edit = async (id: number, todo: AddTodoDto) => {
    await editTodoMutation.mutateAsync({ id, todo });
  };

  const del = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
  };

  if (todosQuery.isLoading) {
    return <span>Loading...</span>;
  }

  if (todosQuery.isError) {
    return <span>Error: {todosQuery.error.message}</span>;
  }

  return (
    <Container paddingY={20}>
      <Heading>Todos</Heading>
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
