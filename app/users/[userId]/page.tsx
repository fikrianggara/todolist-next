import Link from "next/link";
import React from "react";
import { User } from "../../../typings";
import { fetchTodos } from "../../todos/TodosList";
type PageProps = { params: { userId: number } };

const fetchUser = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();
  return user;
};

const getTodosByUserId = async (id: number) => {
  const todos = await fetchTodos();
  const filteredTodos = todos.filter((todo) => todo.userId == id);
  return filteredTodos;
};
//set default as server component, so we can use async component
//to use ISR, SSG, you need to change fetch 'cache' options,
// or 'revalidate' for ISR
const TodoPage = async ({ params: { userId } }: PageProps) => {
  const user = await fetchUser(userId);
  const todos = await getTodosByUserId(userId);
  return (
    <div className="space-y-4">
      <h1 className="font-medium text-2xl">
        User <span>{userId}</span>
      </h1>
      <div className="space-y-3 text-lg p-4">
        <p>
          {user.name}-({user.username})
        </p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>
      <div>
        <Link href="/users" className="border rounded p-2">
          back to users list
        </Link>
      </div>
      <div className="border rounded-lg">
        <div className="space-y-2 p-4">
          <h2 className="font-medium text-xl">
            User <span>{userId} Todos</span>
          </h2>
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
      </div>
    </div>
  );
};

export default TodoPage;
