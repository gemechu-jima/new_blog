'use client'
import React from 'react'
type ButtonProps = {
  name: string;
  color?: 'red' | 'orange' | 'green' | 'blue' | 'sky';
  click?: (ev:any) => void;
};
export default function Button({name, click, color}:ButtonProps) {
const getColor = () => {
  switch (color) {
    case "red":
      return "bg-red-500 text-white";
    case "orange":
      return "bg-orange-500 text-white";
    case "green":
      return "bg-green-500 text-white";
    case "blue":
      return "bg-blue-500 text-white";
    case "sky":
      return "bg-sky-500 text-white";
    default:
      return "bg-gray-200 text-black"; 
  }
};

  return (
    <button onClick={click} className={`${getColor()} px-5 rounded-xl py-3 w-full `}>{name}</button>
  )
}
