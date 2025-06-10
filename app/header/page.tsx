"use client"
import React, { useState } from 'react'
import Logo from './logo/page'
import Nav from './nav/page'
import Search from './search/page'
import EveryLink from '../model/EveryLink'
export default function Header() {
  const [openLink, setOpenLink]=useState(false)
  return (
    <div className='fixed z-100 bg-linear-to-b from-black from-3%  to-gray-950 to-5% text-white  w-screen h-[5rem] flex text-center inset-x-0 top-0'>
        <div className='w-[88%] mx-auto flex justify-between items-center '>
         { openLink && <EveryLink/>}
         <Logo/>
         <Nav setOpenLink={setOpenLink}/>
         <Search/>
        </div>
    </div>
  )
}
