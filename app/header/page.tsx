"use client"
import React, { useState } from 'react'
import Logo from './logo/page'
import Nav from './nav/page'
import Search from './IconSide/page'
import EveryLink from '../model/EveryLink'
import ThemeSwitcher from '@/components/theme'
export default function Header() {
  const [openLink, setOpenLink]=useState(false)
  return (
    <>
     
    <div className='fixed z-100 bg-linear-to-b dark:bg-black bg-white text-black dark:text-white  w-screen h-20 flex text-center inset-x-0 top-0 pt-3'>
        <div className='w-[88%] mx-auto flex justify-between items-center '>
         { openLink && <EveryLink setOpenLink={setOpenLink} />}
         <Logo/>
         <Nav setOpenLink={setOpenLink}/>
         <div className='flex flex-initial items-center gap-3'>
         <Search/>
         <ThemeSwitcher/>
         </div>
        </div>
    </div>
    </>
    
  )
}
