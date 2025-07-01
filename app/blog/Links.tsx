import React from 'react'
import Link from 'next/link'
import { title } from 'process'
import { useRouter } from 'next/navigation'
export default function Links({link, setTitle}:{link:string, setTitle:(title: string) => void}) {
  const router=useRouter()
  const handleTitle=(title:string)=>{
   router.push(`/blog/${title}`)
  }
  return (
    <button onClick={() => {setTitle(link), handleTitle(link)}} 
    className='capitalize px-2 hover:text-sky-500 hover:border-b-2 border-sky-500 '>{link}</button>
  )
}
