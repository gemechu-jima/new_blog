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
  const [images, setImages] = useState<{ file: File; url: string }[]>([])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files) return toast.error("please upload image");

  const filePreviews = Array.from(files).map(file => {
    const typedFile = file as File;
    return {
      file: typedFile,
      url: URL.createObjectURL(typedFile),
    };
  });

  setImages(prev => [...prev, ...filePreviews]); 
};
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const formData = new FormData(ev.currentTarget)
     images.forEach((imgObj, index) => {
    formData.append(`images`, imgObj.file); 
  });

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
            name='Name'
          />
          <Select title='title' name='Title' />
          <TextArea
            onChange={handleOnChange}
            placeholder="Enter Introduction"
            name='Introduction'
            resize={false}
          />
          <TextArea
            onChange={handleOnChange}
            placeholder="Enter Content"
            name='content'
            resize={true}
          />
          <Input
            type='text'
            value=''
            onChange={handleOnChange}
            placeholder="Link of reference"
            name='Link' />
          <ImageUpload  onChange={handleOnChange}/>
          {images.length > 0 ? (
            <div className='grid md:grid-cols-3'>
              {images.map((imgObj, index) => (
              <Image
                key={index}
                src={imgObj.url}
                alt={`Uploaded ${index + 1}`}
                width={100}
                height={100}
              />
            ))}
            </div> 
          ) : (
            <p>Please Upload Image</p>
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
