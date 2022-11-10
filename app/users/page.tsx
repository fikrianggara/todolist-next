import React from "react";
import UsersList from "./UsersList";
const UsersPage = () => {
  return (
    <div>
      <h1 className=" text-2xl font-medium">Users</h1>
      {/* @ts-ignore */}
      <UsersList />
    </div>
  );
};

export default UsersPage;
