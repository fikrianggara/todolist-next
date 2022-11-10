import Link from "next/link";
import React from "react";
import { User } from "../../typings";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return users;
};

const UsersList = async () => {
  const users = await fetchUsers();

  return (
    <div className="space-y-2 p-4">
      {users.map((user) => (
        <p key={user.id}>
          <Link href={`/users/${user.id}`}>
            <div className="bg-white hover:bg-blue-50 duration-300 ease-in-out rounded-lg p-4 border flex space-x-4">
              <p>
                {user.name} -{" "}
                <span className="text-blue-500">{user.email}</span>
              </p>
            </div>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default UsersList;
