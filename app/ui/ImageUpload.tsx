import React from 'react'

export default function ImageUpload({onChange}:{onChange:(ev:any)=>void}) {
  return (
    <div className="w-full max-w-3xl mx-auto my-4 px-4">
   <input
  type="file"
  multiple
  onChange={onChange}
  accept="image/*"
  name="upload"
  className=' w-full  input-accent file-input file-input-accent rounded-md  '
/>

</div>
  )
}
