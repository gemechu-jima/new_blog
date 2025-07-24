import React from 'react'
import Scroll from './scroll'
export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div  className='w-[90%] md:w-[80%] mx-auto dark:bg-black dark:text-white bg-white '>
        <Scroll/>
        {children}
        </div>
  )
}
