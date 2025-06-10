import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import { sampleData } from '../utils/db'
export default function Latest() {
  return (
   <div className=' h-[500px] overflow-hidden'>
    {sampleData.map((item, index) =>(
       <Link key={item.id} href={item.link} className="flex mt-2 pt-2 gap-2 cursor-pointer shadow-xl p-2 ">
            <Image src={item.image} alt="call to action" width={100} height={100} className="rounded-2xl"/>
            <p> {item.introduction}</p>
          </Link>
    ))}
    </div>
  )
}
