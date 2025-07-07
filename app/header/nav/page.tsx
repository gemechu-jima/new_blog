"use client"
import React from 'react'
import Link from 'next/link'
import { UseContextProvider } from '@/app/useContext/UseContext'
export default function Nav({ setOpenLink }: { setOpenLink: (ev: boolean) => void }) {
  const{ user}=UseContextProvider()
 
  return (
    <div className='flex gap-5 items-center '>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/blog'
        onMouseEnter={() => setOpenLink(true)}
        onMouseLeave={() =>  setOpenLink(false)
        }>Blog</Link>
      <Link href='/podcast'>Podcast</Link>
      <Link href='/contact'>Contact</Link>
     {user?.role==='ADMIN' && <Link href={'/adminpanel'}>Admin Panel</Link>}
    {user?.email && <button className="" onClick={()=> {
      const modal = document.getElementById('my_modal_3') as HTMLDialogElement
      modal?.showModal()
     }}>post blog</button>}
    </div>
  )
}
