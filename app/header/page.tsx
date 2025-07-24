"use client"
import React, { useState } from 'react'
import Logo from './logo/page'
import Nav from './nav/page'
import Search from './IconSide/page'
import EveryLink from '../model/EveryLink'
import ThemeSwitcher from '@/components/theme'
import MenuIcon from '@mui/icons-material/Menu';
import {usePathname} from 'next/navigation'
import Backdrop from '../model/Backdrop'
import Mobile from './nav/mobile'
export default function Header() {
  const [openLink, setOpenLink]=useState<boolean>(false)
  const [open, setOpen]=useState(false)
  const pathname=usePathname()
  return (
    <>
     
    <div className='fixed z-100 bg-linear-to-b dark:bg-black bg-white text-black dark:text-white  w-screen h-20 flex text-center inset-x-0 top-0 pt-3'>
        <div className='w-[88%] mx-auto sm:flex justify-between items-center hidden  '>
         {!pathname?.startsWith('/blog') &&  openLink && <EveryLink setOpenLink={setOpenLink} />}
         <Logo/>
         <Nav setOpenLink={setOpenLink}/>
         <div className='flex flex-initial items-center gap-3'>
         <Search/>
         <ThemeSwitcher/>
         </div>
        </div>
        <div className='sm:hidden w-[75%] mx-auto  flex items-center justify-between '>
          <Logo/>
          <div>
           <button type='button' ><MenuIcon onClick={()=>setOpen(true)}/></button>
          <ThemeSwitcher/>
          </div>
        </div>
       {open && <Backdrop onClick={()=>setOpen(false)}>
         <Mobile/>
         </Backdrop>}
    </div>
    </>
    
  )
}
