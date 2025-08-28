'use client'
import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link';
import { createUser } from '@/actions/actions'
import Image from 'next/image';
import ImageUpload from '@/app/ui/ImageUpload';
export default function Register() {
  const [images, setImages] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const cloudImage = images.find((url) =>
      typeof url === 'string' && url.startsWith('https://res.cloudinary.com/')
    )
    if (cloudImage) {
      formData.append('image', cloudImage || 'https://res.cloudinary.com/djqmtxpds/image/upload/v1750853074/qezgi2xycvydsa8eefl7.png')
    }
    console.log(formData)
    const result = await createUser(formData);
    if (result?.success) {
      toast.success(result.message);
    } else {
      toast.error(result?.message);
    }
  };
  const p = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
  const triggerUpload = () => {
    inputRef.current?.click()
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <h1 className='text-center pb-5 text-4xl text-accent text-shadow-accent-content font-'> Register Page</h1>
        <div className="flex flex-col space-y-4">
          {1 && <fieldset className="fieldset flex flex-col items-center -mt-10 gap-3">
            <ImageUpload setImages={setImages} inputRef={inputRef} />
            {images?.length>0 ? 
            <>
             <Image src={images.find((url) =>typeof url === 'string' && url.startsWith('https://res.cloudinary.com/')) || '/assets/userIcon.png'} alt={"icon"} width={100} height={500}
              className='flex center rounded-full cursor-pointer' onClick={triggerUpload} />
            </>
            :
            <>
             <Image src="/assets/userIcon.png" alt={"icon"} width={100} height={500}
              className='flex center rounded-full cursor-pointer' onClick={triggerUpload} />
            <p className=" text-center w-ful">Max size 2MB</p>
            </>
            }
           
          </fieldset>}
          <label className="input input-info validator w-full">
            <svg className="h-[2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              name='username'
              placeholder="Username"
              minLength={3}
              maxLength={100}
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              title="Only letters, numbers or dash"
            />
          </label>
          <div className="validator-hint hidden">
            Must be 3 to 30 characters
            containing only letters, numbers or dash
          </div>
          <label className="input input-info validator w-full">
            <svg className="h-[2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" required name='email' placeholder="mail@site.com" />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          <label className="input input-info validator w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              name='password'
              placeholder="Password"
              minLength={6}
              // pattern=""
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
          </p>
          <label className="input input-info validator w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              name='confirmPassword'
              placeholder="ConfirmPassword"
              minLength={6}
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
          </p>
        </div>
        <button type="submit" className="btn btn-accent w-full">sign Up</button>
        <div className='text-center h-4'>

        </div>
        <p className='text-center'>Already have account ? <Link href={'/login'}>sign in</Link></p>

      </form>

    </>
  )
}
