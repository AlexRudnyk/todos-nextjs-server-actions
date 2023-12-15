"use client";

import { deleteTodo } from "@/actions";
import React from "react";

const DeleteTodoBtn = ({ id }: { id: string }) => {
  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
  };

  return (
    <button
      type="button"
      onClick={() => handleDeleteTodo(id)}
      className="p-2 bg-gray-200 rounded-xl"
    >
      Delete
    </button>
  );
};

export default DeleteTodoBtn;
