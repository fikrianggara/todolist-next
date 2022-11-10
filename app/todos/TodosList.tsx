import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";

export const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  return todos;
};

//automatically server component, so we can use async component
const TodosList = async () => {
  const todos = await fetchTodos();
  return (
    <div className="space-y-2 p-4">
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>
            <div className="bg-white hover:bg-blue-50 duration-300 ease-in-out rounded-lg p-4 border flex space-x-4">
              <span>Todo {todo.id}</span>
              <span
                className={`${
                  todo.completed ? "text-gray-400" : "text-blue-500"
                }`}
              >
                {todo.title}
              </span>
            </div>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default TodosList;
