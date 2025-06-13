import React from 'react'
import Link from 'next/link'
export default function Links({link}:{link:string}) {
  return (
    <button  className='capitalize px-2 hover:text-sky-500 hover:border-b-2 border-sky-500'>{link}</button>
  )
}
