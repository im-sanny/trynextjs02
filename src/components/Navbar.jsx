"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
  ];
  const handler = () => {
    router.push("/login");
  };
  return (
    <div>
      <nav className="bg-teal-500 px-6 py-4 flex justify-between items-center">
        <h1>hello</h1>
        <ul className="flex justify-center items-center space-x-4">
          {links.map((link) => (
            <Link
              className={`font-bold ${
                pathName === link.path && "text-yellow-300"
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={handler}
          className="bg-white bg text-teal-700 font-bold p-2 rounded-md"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
