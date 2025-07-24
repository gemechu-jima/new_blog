"use client"
import React from 'react'
import { PropsInput } from '../../types/inputType'
export default function Input({ type, value, onChange, placeholder, name }: PropsInput) {
  return (
<div className="w-full max-w-3xl mx-auto my-4 px-4">
  <label className="block text-xl sm:text-lg font-medium text-gray-700 mb-2 capitalize">
    {name}
     </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="mt-2 w-full input input-accent rounded-md p-3 text-base sm:text-sm md:text-base lg:text-lg"
    />
 
</div>
  )}