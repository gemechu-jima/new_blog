
import React from 'react'
import { PropsInput } from '../../utils/interface'
export default function Input({type, value, onChange, placeholder, name}:PropsInput) {
  return (
    <div className='w-full'>
              <label className='w-full rounded-md text-white text-2xl mb-2 '>{name}</label>
              <input 
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className='w-full wrap-anywhere rounded-md bg-slate-800 placeholder:text-gray-400 focus:outline-2 outline-sky-400 p-2 text-slate-200 '/>
            </div>
  )
}
