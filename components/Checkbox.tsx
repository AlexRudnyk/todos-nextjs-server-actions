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
      className="flex justify-center items-center mr-7 cursor-pointer appearance-none w-5 h-5 border-2 border-black rounded-md before:content-[''] before:w-3 before:h-3 before:bg-violet-600 before:rounded-sm before:scale-0 checked:before:scale-100"
    />
  );
};

export default Checkbox;
