"use client"
import React from 'react'
import Image from 'next/image'
import Input from '../ui/Input'
import Select from '../ui/Select'
import TextArea from '../ui/textArea'
import Button from '../ui/Button'
import WrapImage from '../ui/Image'
export default function formpost() {
  const handleOnChange = (ev: any) => {
    ev.preventDefault()
  }
  return (
    <div className='bg-gray-900 w-full'>
      <form className='w-[70%] h-[80%] mx-auto px-6 py-10'>
        <Input
          type='text'
          value=''
          onChange={handleOnChange}
          placeholder="Enter Name"
          name='Name'
        />
        <Select title='title' name='Title' />
        <Input
          type='text'
          value=''
          onChange={handleOnChange}
          placeholder="Enter Author name"
          name='Author'
        />
        <TextArea
          onChange={handleOnChange}
          placeholder="Enter Introduction"
          name='Introduction'
        />
        <TextArea
          onChange={handleOnChange}
          placeholder="Enter Content"
          name='Full Content'
        />
        <Input
          type='text'
          value=''
          onChange={handleOnChange}
          placeholder="Link of reference"
          name='Link' />
        <Input
          type='file'
          value=''
          onChange={handleOnChange}
          placeholder="Upload Image"
          name='Upload' />
        {1 < 0 ?
          (
            <WrapImage>
              <Image
                src="/profile.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </WrapImage>
          )
          : (<p>Please Upload Image</p>)}
          <div className='flex justify-between'>
<Button name='Submit'/>
          <Button name='Cancel'/>
          </div>
          
      </form>
    </div>
  )
}
