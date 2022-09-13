import React, { FC, useState } from "react";
import { AddTodoDto } from "src/interfaces";
import {
  Button,
  Input,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";

type TProps = {
  create(todo: AddTodoDto): Promise<void>;
};

const AddTodo: FC<TProps> = ({ create }) => {
  const [todo, setTodo] = useState<AddTodoDto>({
    name: "",
    desc: "",
    done: false,
  });

  const onInput = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <VStack spacing={5} align="start" marginBottom={10}>
      <Heading>Add</Heading>
      <FormControl variant="floating" id="name" isRequired>
        <Input
          onInput={onInput}
          type="text"
          id="name"
          name="name"
          value={todo.name}
          placeholder=" "
        />
        <FormLabel>Name</FormLabel>
      </FormControl>

      <FormControl variant="floating" id="desc" isRequired>
        <Textarea
          onChange={onInput}
          id="desc"
          name="desc"
          value={todo.desc}
          resize="none"
          placeholder=" "
        />
        <FormLabel>Desc</FormLabel>
      </FormControl>

      <Button onClick={add}>Add</Button>
    </VStack>
  );
};

export default AddTodo;
