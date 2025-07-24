'use client'
import React from 'react'
import { useParams } from 'next/navigation'
export default function NotFound() {
    const params=useParams()
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl'>404 🚫 Not Found</h1> 
      <h2 className="text-lg text-gray-500">
        Params:{params.slug}
      </h2>
    </div>
  )
}
