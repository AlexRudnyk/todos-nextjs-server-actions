import { getAllTodos } from "@/actions";
import { ToDoForm, Todo } from "@/components";
import { TodoProps } from "@/types";

export default async function Home() {
  const todos: TodoProps[] = await getAllTodos();
  const reversedTodos = [...todos].reverse();

  return (
    <main className="w-[1280px] mx-auto p-5 pt-10">
      <ToDoForm />
      <h1 className="text-3xl mb-8">Your list of Todos:</h1>
      <ul>
        {reversedTodos.map((todo: TodoProps) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
