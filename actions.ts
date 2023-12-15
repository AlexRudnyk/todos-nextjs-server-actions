"use server";
import { revalidatePath } from "next/cache";
import connect from "./db";
import Todo from "./model/Todo";

export async function getAllTodos() {
  await connect();

  const todos = await Todo.find();
  return todos;
}

export async function addTodo(title: string) {
  try {
    await connect();
    const todo = new Todo({ title });
    await todo.save();
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  try {
    await connect();
    const deletedTodo = await Todo.findOneAndDelete({
      _id: id,
    });

    if (!deletedTodo) {
      throw new Error(`Good with id=${id} not found`);
    }
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}
