import Link from "next/link";
import React from "react";
import { Todo } from "../../../typings";

type PageProps = { params: { todoId: string } };

const fetchTodo = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    //set cache for :
    //Server Side Rendering to 'no-cache'
    //Static Site Generation to' force-cache'
    cache: "force-cache",
    //Incremental Static Regeneration -> amount of seconds to revalidate
    next: {
      revalidate: 10,
    },
  });
  const todo: Todo = await res.json();
  return todo;
};

//set default as server component, so we can use async component
//to use ISR, SSG, you need to change fetch 'cache' options,
// or 'revalidate' for ISR
const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);
  console.log(todo);
  return (
    <div className="space-y-4">
      <h1 className="font-medium text-2xl">
        Todo <span>{todoId}</span>
      </h1>
      <div className="space-y-3 text-lg p-4">
        <p>Title : {todo.title}</p>
        <p>
          Completed :{" "}
          <span
            className={`${
              todo.completed ? "text-green-500" : "text-amber-600"
            }`}
          >
            {todo.completed ? "yes" : "not yet"}
          </span>
        </p>
        <p>User Id: {todo.userId}</p>
      </div>
      <div>
        <Link href="/todos" className="border rounded p-2">
          back to todo list
        </Link>
      </div>
    </div>
  );
};

export default TodoPage;

//perform SSG
export const generateStaticParams = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimedTodos = todos.splice(0, 10);
  return trimedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
};
