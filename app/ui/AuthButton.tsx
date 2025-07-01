'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton() {
  return (
    <button onClick={() => signIn('google')} type='button' className="text-blue-500 cursor-pointer">
      Login with Google
    </button>
  )
}

//   const { data: session } = useSession()

//   if (session) {
//     return (
//       <div className="flex items-center gap-4">
//         <img src={session.user?.image!} className="w-10 h-10 rounded-full" />
//         <p>{session.user?.email}</p>
//         <button onClick={() => signOut()} className="text-red-500">Logout</button>
//       </div>
//     )
//   }