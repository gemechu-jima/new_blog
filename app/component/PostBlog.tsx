import Image from 'next/image'
import React from 'react'
import { sampleData } from '../utils/db'
export default function PostBlog() {
    return (
        <div className='grid grid-cols-3 gap-10  mt-4 w-[90%] mx-auto'>
          
                {
                    sampleData.map((item) => (
                        <div className='w-full relative' key={item.id}>
                            <Image src={item.image} alt="call to action" width={400} height={200} className='rounded-xl' />
                            <h2>{item.name}</h2>
                            <p>{item.introduction}</p>
                            <div className='flex w-[80%] mx-auto justify-between items-center mt-5 '>
                                <div className='flex gap-3'>
                                    <Image src={'/assets/images/female.jpg'} alt="call to action" width={20} height={40} className='rounded-full' />
                                    <p>{item.author}</p>
                                </div>
                                <span>. 2 min read</span>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}
