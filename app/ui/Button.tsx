import React from 'react'

export default function Button({name}:{name:string}) {
  return (
    <button className='bg-white text-sky-500 px-5 rounded-xl py-3 '>{name}</button>
  )
}
