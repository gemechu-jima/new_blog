
'use client'
import React , {useEffect} from 'react'
import { SignIn } from '@/actions/actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { UseContextProvider } from '@/app/useContext/UseContext'
import AuthButton from '@/app/ui/AuthButton'
export default function Login() {
  const {setUser, user,}=UseContextProvider()
 const router=useRouter()

  const handleLogin=async(formData: FormData)=>{
   const result=await SignIn(formData)
   if(result?.success){
    toast.success(result.message)
    setUser(result.data)
    router.push('/blog')
   }else{
    toast.error(result?.message)
   }
  }
 useEffect(() => {
    if (user) {
      router.push('/blog')
    }
  }, [user])

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
            minLength={6}
            title="Must include number, lowercase and uppercase letter"
           
          />
        </label>
          <button type="submit" className="btn btn-accent">sign in</button>
          <div className='text-center cursor-pointer'>
            <AuthButton/>
          </div>
          <p className='text-center'>Are you new ? <Link href={'/register'}>create an Account</Link></p>
      
    </div>
    </form>
    </>
  )
}
