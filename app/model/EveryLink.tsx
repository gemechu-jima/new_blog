import React from 'react'
import Scroll from '../blog/scroll'
export default function EveryLink({setOpenLink}:{setOpenLink:(ev:boolean)=>void}) {
  return (
    <div className='fixed inset-x-64 top-14 rounded-md  bg-gray-800 text-white py-4 ' 
    onMouseOver={()=>(setOpenLink(true))} onMouseLeave={()=>(setOpenLink(false))}><Scroll/></div>
  )
}
