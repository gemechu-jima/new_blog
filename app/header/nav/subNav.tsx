import React from "react";
import Link from "next/link";
export default function SubNav(menu: any) {
  return (
    <div className="absolute top-full w-[40rem] p-3 mt-5 -left-[20rem] grid grid-cols-5 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
      {menu.submenu.map((sub: any) => (
        <Link
          key={sub.name}
          href={sub.href}
          className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {sub.name}
        </Link>
      ))}
    </div>
  );
}
