import React from 'react'
import { titles } from '../../utils/title'
import { PropsSelect } from '../../utils/interface'
export default function Select({ name }: PropsSelect) {
    return (
        <div className='w-full'>
            <label className='w-full rounded-md text-white text-2xl mb-2 '>{name}</label>
            <select name={name} className='w-full wrap-anywhere rounded-md bg-slate-800 placeholder:text-gray-400 focus:outline-2 outline-sky-400 p-2 text-slate-200'>
                {titles.map((title, index) => (
                    <option key={title.id + index} value={title.title}>{title.title}</option>
                ))}
            </select>

        </div>
    )
}
