import React from 'react'
import { PropsTetxarea } from '../utils/interface'
export default function textArea({name, placeholder }:PropsTetxarea) {
  return (
    <div>
         <label className='w-full rounded-md text-white text-2xl mb-2 '>{name}</label>
        <textarea   placeholder={placeholder}
        className='w-full peer col-end-12 rounded-md bg-slate-800 placeholder:text-gray-400 focus:outline-2 outline-sky-400 p-2 text-slate-200' rows={6}></textarea>
        </div>
  )
}
