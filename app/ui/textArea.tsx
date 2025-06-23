import React from 'react'
import { PropsTetxarea } from '../../types/inputType'
export default function TextArea({ name, placeholder, resize }: PropsTetxarea) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
       <label className="block text-xl sm:text-lg font-medium text-gray-700 mb-2 capitalize">
    {name}
    </label>
      <textarea
        placeholder={placeholder}
        name={name}
        className={`${resize? "resize":" resize-none"} w-full textarea textarea-accent  rounded-md p-3 text-base sm:text-sm md:text-base lg:text-lg`}
        rows={6}
      
      />
    </div>
  )
}
