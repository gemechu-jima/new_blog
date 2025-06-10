import React, {  ReactNode } from 'react'

export default function Image({children}:{children:ReactNode}) {
    const hnadleImage=(ev:React.ChangeEvent<HTMLInputElement>)=>{
   
    }
  return (
    <div className='grid grid-cols-2 items-center gap-3'>{children}</div>
  )
}
