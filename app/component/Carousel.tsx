'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sampleData } from '../utils/db';
import Link from 'next/link';

export default function Carousel() {
  const [indexImage, setIndexImage] = useState(1)
  const handlePrev = () => {
    setIndexImage(prev => (prev === 1 ? sampleData.length : prev - 1))
  }
  const handleNext = () => {
    setIndexImage(prev => (prev === sampleData.length ? 1 : prev + 1))
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndexImage(prev => (prev < sampleData.length ? prev + 1 : 1));
    }, 10000);

    return () => clearTimeout(timer);
  }, [indexImage]);

  return (
    <div className='relative w-[500px] h-[500px] overflow-hidden '>
      {sampleData.map((item, index) =>
        index + 1 === indexImage ? (
          <Image
            key={item.id}
            src={item.image}
            alt={item.introduction}
            layout='fill'
            className=" object-fill"
          />
        ) : null
      )}

      <ArrowLeftIcon onClick={handlePrev}
        className='absolute  left-1 bg-gray-900 text-white text-3xl rounded-full inset-y-1/2 cursor-pointer' />
      <ArrowRightIcon onClick={handleNext}
        className='absolute  right-1 bg-gray-900 text-white text-3xl rounded-full inset-y-1/2 cursor-pointer' />
     {sampleData.map((item, index) =>
        index + 1 === indexImage ? (
        <Link href={item.link} key={item.id} className="absolute bottom-0 left-0 w-full bg-black opacity-50  text-white">
          <button className="bg-gray-500 px-5 py-1 border-2 border-amber-50 rounded-xl cursor-pointer">{item.title}</button>
        <p >{item.introduction}</p>
        </Link>
        ) :null
     )}
       
    </div>
  )
}
