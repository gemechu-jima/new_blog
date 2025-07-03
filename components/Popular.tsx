import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import useBlogs from '@/hooks/useBlogs'
import { sampleData } from '../utils/db'
export default function Popular() {
  const { data, loading, error } = useBlogs({limit:12});
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;
    const orderbyId=data.slice().sort((a,b)=> (a.name ?? '').localeCompare(b.name ?? ''))
  return (
   <div className=' h-[500px] overflow-y-scroll'>
    {orderbyId.map((item, index) =>(
       <Link key={item.id} href={item.link} className="flex mt-2 pt-2 gap-2 cursor-pointer shadow-sm p-2 ">
            <Image src={item.images[0]} alt="call to action" width={100} height={100} className="rounded-2xl"/>
            <p className='line-clamp-2 text-ellipsis'> {item.introduction}</p>
          </Link>
    ))}
    </div>
  )
}