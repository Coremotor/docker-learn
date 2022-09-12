import React, { FC } from "react";
import {
  Flex,
  List,
  ListItem,
  Spacer,
  Text,
  CloseButton,
  Skeleton,
} from "@chakra-ui/react";
import { TodoInList } from "src/interfaces";

type TProps = {
  todos: TodoInList[];
  todoId: number | null;
  del(id: number): Promise<void>;
  setTodoId: React.Dispatch<React.SetStateAction<number | null>>;
  isLoading: boolean;
};

const TodoList: FC<TProps> = ({ todos, setTodoId, del, isLoading, todoId }) => {
  const deleteTodo = async (id: number) => {
    await del(id);
  };
  return (
    <List spacing={3} paddingY={10}>
      {todos &&
        todos.map((todo: any) => (
          <ListItem key={todo.id} onClick={() => setTodoId(todo.id)}>
            <Skeleton isLoaded={!isLoading}>
              <Flex
                cursor="pointer"
                border="1px"
                padding={5}
                borderRadius={4}
                align="center"
                _hover={{
                  backgroundColor: "teal.200",
                  transition: "0.5s",
                }}
                backgroundColor={
                  todo.id === todoId ? "teal.600" : "transparent"
                }
              >
                <Text>{todo.name}</Text>
                <Spacer />
                <CloseButton onClick={() => deleteTodo(todo.id)} />
              </Flex>
            </Skeleton>
          </ListItem>
        ))}
    </List>
  );
};

export default TodoList;
