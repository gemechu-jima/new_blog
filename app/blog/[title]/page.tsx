'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogProps } from '@/types/blog'
import { getBlogByTitle } from "@/actions/blogsAction"
import NotFound from './NotFound'

export default function News() {
  const [blogByTitle, setBlogByTitle] = useState<BlogProps[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const params = useParams() as { title?: string }
  const title = params?.title
   console.log(title, 'title')
   console.log('blogByTile', blogByTitle)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (title) {
  //         const result = await getBlogByTitle(title)
  //         if (result.success && result.data) {
  //           setBlogByTitle(result.data)
  //         } else {
  //           setBlogByTitle(null)
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching blog by title:", error)
  //       setBlogByTitle(null)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchData()
  // }, [title])

useEffect(() => {
  const fetchData = async () => {
    try {
      if (title) {
        const res = await fetch(`/api/blogByTitle?title=${encodeURIComponent(title)}&limit=10`)
        const result = await res.json()
        console.log(result)
        if (result.success && result.data) {
          setBlogByTitle(result.data)
        } else {
          setBlogByTitle(null)
        }
      }
    } catch (error) {
      console.error("Error fetching blog by title:", error)
      setBlogByTitle(null)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [title])

  if (loading) {
    return <p className="text-center py-10">Loading...</p>
  }

  if (!blogByTitle || blogByTitle.length === 0) {
  return <NotFound />
}

  return (
    <div>
      {blogByTitle?.length}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-6 border-b-2 border-gray-700 pb-6">
        {blogByTitle?.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="flex flex-col gap-2 p-2 rounded shadow-md hover:shadow-lg transition cursor-pointer"
          >
            {item.images?.[0] ? (
              <Image
                src={item.images[0]}
                alt="Blog image"
                width={500}
                height={300}
                className="rounded-xl w-full h-60 object-cover"
              />
            ) : (
              <div className="w-full h-60 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <p className="line-clamp-2">{item.introduction}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
