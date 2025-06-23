import React from 'react'
import { orderedTitles } from '../../utils/title'
import { PropsSelect } from '../../types/inputType'
export default function Select({ name, title}: PropsSelect) {
    return (
        <div className="w-full max-w-3xl mx-auto my-4 px-4">
            <label htmlFor={name} className="block text-xl sm:text-lg font-medium text-gray-700 mb-2 capitalize">
               {title}
            </label>
            <select
                id={name}
                name={name}
                className="w-full select select-accent rounded-md  text-base sm:text-sm md:text-base lg:text-lg"
            >
                {orderedTitles.map((title, i) => (
                    <option key={i} value={title} className="capitalize">
                        {title}
                    </option>
                ))}
            </select>
        </div>
    )
}
