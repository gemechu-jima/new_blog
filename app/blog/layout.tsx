import React from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div  className='w-[90%] mx-auto dark:bg-black dark:text-white bg-white '>{children}</div>
  )
}
