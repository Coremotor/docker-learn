import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteTodo, editTodo, getTodo, postTodo } from "src/api/todos";
import { AddTodoDto, EditTodo } from "src/interfaces";

export const QueryKeys = {
  todos: "todos",
  todo: "todo",
};

export const todosModels = (queryClient: QueryClient) => {
  const useGetTodoById = (id: number | null) => {
    return useQuery([QueryKeys.todo], () => getTodo(id), {
      refetchOnWindowFocus: false,
    });
  };

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

  return {
    useGetTodoById,
    addTodoMutation,
    deleteTodoMutation,
    editTodoMutation,
  };
};
