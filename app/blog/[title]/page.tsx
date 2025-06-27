'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogProps } from '@/types/blog' 
import {getBlogByTitle} from "@/actions/blogsAction"
export default function News() {
  const [blogByTitle, setBlogByTitle]=useState<BlogProps[] |null >(null)
  const pramas=useParams()as { title?: string }
  const title=pramas?.title
  useEffect(()=>{
     if (!title) return
     try {
       const fetchData=async()=>{
     const result=await getBlogByTitle(title)
     if(result.success && result.data){
      setBlogByTitle(result.data)
     }
    }
    fetchData()
     } catch (error) {
        console.error("Error fetching blog by title:", error)
     }
   
  },[title])
   if (!blogByTitle) {
    return <p className="text-center py-8">Loading blog...</p>
  }

  return (
    <div>
      {blogByTitle.length}
       <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-2 pb-6 border-b-2 border-b-gray-700">
          {blogByTitle.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex flex-col mt-2 pt-2 gap-2 cursor-pointer shadow-md p-2"
            >
           
              <Image
                src={item.images[0]}
                alt="call to action"
                width={500}
                height={500}
                className="rounded-2xl w-96 h-60"
              />
              <p className='text-ellipsis line-clamp-2'>{item.introduction}</p>
            </Link>
          ))}
        </div>
    </div>
  )
}
