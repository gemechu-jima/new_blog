
'use client'
import React from 'react'
import { SignIn } from '@/actions/actions'
import Link from 'next/link'
import { toast } from 'react-toastify'
export default function Login() {
 
  const handleLogin=async(formData: FormData)=>{
   const result=await SignIn(formData)
   if(result.success){
    toast.success(result.success)
   }else{
    toast.error(result.message)
   }
  }
  return (
    <>
    <form action={handleLogin} className="w-full ">
      <h1 className='text-center pb-5 text-4xl text-accent text-shadow-accent-content font-'> Login Page</h1>
      <div className="flex flex-col space-y-4">
        <label className="input input-info validator w-full">
          <input
            type="email"
            name="email"
            required
            placeholder="mail@site.com"
           
          />
        </label>

        <label className="input input-info validator w-full">
          <input
            type="password"
            name="password"
            required
          
            placeholder="Password"
            minLength={8}
            title="Must include number, lowercase and uppercase letter"
           
          />
        </label>
          <button type="submit" className="btn btn-accent">sign in</button>
          <div className='text-center'>
            <button>sign in with Goolge</button>
          </div>
          <p className='text-center'>Are you new ? <Link href={'/register'}>create an Account</Link></p>
      
    </div>
    </form>
    </>
  )
}
