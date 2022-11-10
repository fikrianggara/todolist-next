import React from "react";
import TodosList from "./TodosList";
const TodosHomePage = () => {
  return (
    <div>
      <h1 className=" text-2xl font-medium">Todos</h1>
      {/* @ts-ignore */}
      <TodosList />
    </div>
  );
};

export default TodosHomePage;
