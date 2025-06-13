import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sampleData } from '../utils/db'
export default function Blog() {
  const filterBySports=sampleData.filter((item, i)=>item.title.toLowerCase()==='sports'.toLowerCase())
  const filterByTechnology=sampleData.filter((item, i)=>item.title.toLowerCase()==='technology'.toLowerCase())
  const filterByScience=sampleData.filter((item, i)=>item.title.toLowerCase()==='science'.toLowerCase())
  const filterByLifestyle=sampleData.filter((item, i)=>item.title.toLowerCase()==='lifeestyle'.toLowerCase())
  const filterByEnvironment=sampleData.filter((item, i)=>item.title.toLowerCase()==='environment'.toLowerCase())
  const filterByHealth=sampleData.filter((item, i)=>item.title.toLowerCase()==='health'.toLowerCase())
  const filterByGaming=sampleData.filter((item, i)=>item.title.toLowerCase()==='gaming'.toLowerCase())
  const filterByBusiness=sampleData.filter((item, i)=>item.title.toLowerCase()==='business'.toLowerCase())
  const filterByEconomy=sampleData.filter((item, i)=>item.title.toLowerCase()==='economy'.toLowerCase())
  

  return (
      <div className='w-full'>
        <div className='bg-white dark:bg-gray-900'>
          <h1 className='text-3xl '>Sports</h1>
          <div  className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-2 border-b-2 border-b-gray-700'>
          {filterBySports.map((item, i)=>
          (
             <Link key={item.id} href={item.link} className="flex flex-col mt-2 pt-2 gap-2 cursor-pointer shadow-md p-2 ">
            <Image src={item.image} alt="call to action" width={500} height={500} className="rounded-2xl w-96 h-60"/>
            <p> {item.introduction}</p>
          </Link>
          ))}
          <button className='absolute right-4 bottom-2 text-sky-500 capitalize cursor-pointer'>see More</button>
          </div>

          <h1 className='text-3xl '>Technology</h1>
          <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-2 border-b-2 border-b-gray-700'>
          {filterByTechnology.map((item, i)=>
          (
             <Link key={item.id} href={item.link} className="flex flex-col mt-2 pt-2 gap-2 cursor-pointer shadow-md p-2 ">
            <Image src={item.image} alt="call to action" width={500} height={500} className="rounded-2xl w-96 h-60"/>
            <p> {item.introduction}</p>
          </Link>
          ))}
          </div>
        </div>
      </div>
  )
}
