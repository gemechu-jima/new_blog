import React from 'react'

export default function EveryLink({setOpenLink}:{setOpenLink:(ev:boolean)=>void}) {
  return (
    <div className='fixed inset-x-32 top-14 rounded-md  bg-gray-800 text-white py-4 ' 
    onMouseOver={()=>(setOpenLink(true))} onMouseLeave={()=>(setOpenLink(false))}>EveryLink</div>
  )
}
