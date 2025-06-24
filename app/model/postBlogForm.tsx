'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Button from '../ui/Button'
import TextArea from "../ui/TextArea"
import ImageUpload from '../ui/ImageUpload'
import { createBlog } from '@/actions/blogsAction'
import { toast } from 'react-toastify'
export default function PostBlogForm() {
  const [images, setImages] = useState<string[]>([])

  console.log('images =', images)
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const formData = new FormData(ev.currentTarget)
     const cloudImageUrls = images.filter((img): img is string => typeof img === "string");
    cloudImageUrls.forEach((url) => {
      formData.append('images', url);
    })

    const result = await createBlog(formData);
    if (result.success) {
      toast.success(result.message)
    } else {
      toast.error(result.message)
    }
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
          <ImageUpload setImages={setImages} />
          {images.length > 0 ? (
            <div className='grid md:grid-cols-3'>
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
            <p className='text-center'>Not Image found</p>
          )}

          <div className='flex justify-between'>
            <Button name='Submit' />
            <Button name='Cancel' />
          </div>
        </form>
      </div>
    </dialog>
  )
}
