import React, { FC } from "react";
import { AddTodoDto, TodoInList } from "src/interfaces";

import { Heading, Text, VStack } from "@chakra-ui/react";

type TProps = {
  todo: TodoInList | undefined;
  edit(id: number, todo: AddTodoDto): Promise<void>;
};

const Todo: FC<TProps> = ({ todo }) => {
  return (
    <VStack spacing={2} border="1px" borderRadius={4} padding={4} align="start">
      <Heading size="xs">Name</Heading>
      <Text>{todo?.name}</Text>
      <Heading size="xs">Desc</Heading>
      <Text>{todo?.desc}</Text>
    </VStack>
  );
};

export default Todo;
