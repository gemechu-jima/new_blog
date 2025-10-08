"use client";
import React, { useState, useRef } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { menuHeaders } from "@/utils/menuHeaders";
import { UseContextProvider } from "@/app/useContext/UseContext";
import SubNav from "./subNav";
export default function Nav({
  setOpenLink,
}: {
  setOpenLink: (ev: boolean) => void;
}) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = UseContextProvider();
  const pathname = usePathname();
  const handleMouseEnter = (menuLabel: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    setHoveredMenu(menuLabel);
  };
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 300);
  };

  return (
    <nav className="w-[50%] flex items-center justify-evenly ">
      {menuHeaders.map((menu) => (
        <div
          key={menu.name}
          className="relative "
          onMouseEnter={() => handleMouseEnter(menu.name)}
          onMouseLeave={() => handleMouseLeave()}
        >
        {menu.name === 'Admin Panel' ? (
          user?.role === 'ADMIN' && <Link href={menu.href}>{menu.name}</Link>
        ) : (
          <Link href={menu.href}>{menu.name}</Link>
        )}

          {menu.submenu && hoveredMenu === menu.name && !pathname?.startsWith(menu.href) && (
           <SubNav submenu={menu.submenu} />
          )}
        </div>
      ))}
    </nav>
  );
}
//  <div className='flex gap-5 items-center '>
//     <Link href='/'>Home</Link>
//     <Link href='/about'>About</Link>
//     <Link href='/blog'
//       onMouseEnter={() => setOpenLink(true)}
//       onMouseLeave={() =>  setOpenLink(false)
//       }>Blog</Link>
//     <Link href='/podcast'>Podcast</Link>
//     <Link href='/contact'>Contact</Link>
//    {user?.role==='ADMIN' && <Link href={'/adminpanel'}>Admin Panel</Link>}
//   {user?.email && <button className="cursor-pointer" onClick={()=> {
//     const modal = document.getElementById('my_modal_3') as HTMLDialogElement
//     console.log(modal)
//     modal?.showModal()
//    }}>post blog</button>}
//   </div>
