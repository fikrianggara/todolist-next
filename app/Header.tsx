import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex space-x-4 p-4 border border-b">
      <Link href="/">Home</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/users">Users</Link>
    </header>
  );
};

export default Header;
