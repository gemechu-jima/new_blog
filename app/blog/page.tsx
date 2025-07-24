import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { orderedTitles } from '@/utils/title'
import { getBlogs, update } from '@/actions/blogsAction'
import PostBlogForm from '../model/postBlogForm'

export default async function Blog() {
  const data =await getBlogs()
  // const u=await update()
 
 const groupedData = orderedTitles.map((title) => ({
  title,
  items: data.filter((item) => item.title.toLowerCase() === title),
}))
  

  return (
      <div className='w-full'>
        <div className="bg-white dark:bg-gray-900 ">
  {groupedData.map(({ title, items }) =>
    items.length > 0 ? (
      <div key={title} >
        <h1 className="text-3xl capitalize">{title}</h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-2 pb-6 border-b-2 border-b-gray-700">
          {items.map((item) => (
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
          
          <button className="absolute right-4 bottom-2 text-sky-500 capitalize cursor-pointer">
            see more
          </button>
        </div>
      </div>
    ) : null
  )}
</div>
        <PostBlogForm/>

      </div>
  )
}
