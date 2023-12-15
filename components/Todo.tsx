import { TodoProps } from "@/types";
import React from "react";
import { DeleteTodoBtn } from ".";

const Todo = ({ todo }: { todo: TodoProps }) => {
  return (
    <li className="mb-6 last:mb-0 w-96 flex justify-between items-center outline outline-1 outline-gray-300 rounded-lg p-3">
      {todo.title}
      <DeleteTodoBtn id={String(todo._id)} />
    </li>
  );
};

export default Todo;
