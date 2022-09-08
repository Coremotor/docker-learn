export interface TodoInList {
  id: number;
  name: string;
  desc: string;
  done: boolean;
}

export interface AddTodoDto {
  name: string;
  desc: string;
  done: boolean;
}

export interface EditTodo {
  id: number;
  todo: AddTodoDto;
}

export interface QueryError {
  message: string;
}
