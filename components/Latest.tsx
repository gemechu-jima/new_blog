import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import useBlogs from '@/hooks/useBlogs'
import { sampleData } from '../utils/db'

export default function Latest() {
const { data, loading, error } = useBlogs({limit:8});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  return (
   <div className=' h-[500px] overflow-y-scroll'>
    {data.map((item, index) =>(
       <Link key={item.id} href={item.link} className="flex mt-2 pt-2 gap-2 cursor-pointer shadow-md p-2 ">
            <Image src={item.images[0]} alt="call to action" width={100} height={100} className="rounded-2xl"/>
            <p className='line-clamp-3 text-ellipsis'> {item.introduction}</p>
          </Link>
    ))}
    </div>
  )
}
