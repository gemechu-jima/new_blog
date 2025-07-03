'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Input from '../ui/Input'
import Select from '../ui/Select'
import ImageUpload from '../ui/ImageUpload'
import { createBlog } from '@/actions/blogsAction'
import { toast } from 'react-toastify'
import TextArea from '../ui/TextArea'
export default function PostBlogForm() {
  const [images, setImages] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const formData = new FormData(ev.currentTarget)
    const cloudImageUrls = images.filter((img): img is string => typeof img === "string");
    cloudImageUrls.forEach((url) => {
      formData.append('images', url);
    })
    console.log("cloudImage", cloudImageUrls)
    const result = await createBlog(formData);
    if (result.success) {
      toast.success(result.message)
      
    } else {
      toast.error(result.message)
    }
  }
  const triggerUpload = () => {
    inputRef.current?.click()
  }
  return (
    <dialog id="my_modal_3" className="modal w-full mt-5">
      <div className="modal-box  w-11/12 max-w-5xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <form onSubmit={handleSubmit} className='w-[90%] h-[80%] mx-auto px-6 py-10'>
          <Input
            type='text'
            value=''
            placeholder="Enter Name"
            name='name'
          />
          <Select title='title' name='title' />
          <TextArea
            placeholder="Enter Introduction"
            name='introduction'
            resize={false}
          />
          <TextArea
            placeholder="Enter Content"
            name='content'
            resize={true}
          />
          <Input
            type='text'
            placeholder="Link of reference"
            name='link' />
          <fieldset className="fieldset flex flex-col items-center gap-3 -mt-8">
            <ImageUpload setImages={setImages} inputRef={inputRef} />
            <Image src="/assets/uploadIcon.png" alt={"icon"} width={140} height={100}
              className='flex center rounded-full cursor-pointer' onClick={triggerUpload} />
          </fieldset>

          {images.length > 0 ? (
            <div className='grid md:grid-cols-3 gap-4'>
              {images.map((imgObj, index) => (
                <Image
                  key={index}
                  src={imgObj}
                  alt={`Uploaded ${index + 1}`}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          ) : (
            <p className='text-center'>Please Upload image of this Infromation</p>
          )}

          <div className='w-[90%] mx-auto flex justify-between mt-6'>
            <button name='Submit' className='w-full py-2 rounded-md px-3 bg-accent text-xl' >Post new blog</button>
          </div>
        </form>
      </div>
    </dialog>
  )
}
