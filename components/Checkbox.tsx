"use client";
import { toggleTodoCompleted } from "@/actions";
import { TodoProps } from "@/types";

const Checkbox = ({ todo }: { todo: TodoProps }) => {
  const handleToggleTodoCompleted = () => {
    toggleTodoCompleted(todo._id);
  };

  return (
    <input
      type="checkbox"
      onChange={handleToggleTodoCompleted}
      checked={todo.isCompleted}
      className="mr-7"
    />
  );
};

export default Checkbox;
