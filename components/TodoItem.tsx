import { TodoProps } from "@/types";
import React from "react";
import { Checkbox, DeleteTodoBtn } from ".";

const TodoItem = ({ todo }: { todo: TodoProps }) => {
  const todoObject = {
    ...todo.toObject(),
    _id: todo._id.toString(),
  };

  return (
    <li className="mb-6 last:mb-0 w-96 flex items-center outline outline-1 outline-gray-300 rounded-lg p-3">
      <Checkbox todo={todoObject} />
      {todoObject.isCompleted ? (
        <h3 className="line-through">{todoObject.title}</h3>
      ) : (
        <h3>{todoObject.title}</h3>
      )}
      <div className="ml-auto">
        <DeleteTodoBtn id={todoObject._id} />
      </div>
    </li>
  );
};

export default TodoItem;
