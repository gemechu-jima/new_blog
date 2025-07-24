'use client'

import React, { useEffect } from 'react'
import ListUser from "./ListUser"
import { UseContextProvider } from '../useContext/UseContext'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function AdminPanelPage() {
  const { user } = UseContextProvider()
  const router = useRouter()
console.log(user)
  useEffect(() => {
    if (user?.role !== 'ADMIN') {
      // toast.error('You do not have permission to access this page')
      router.push('/')
    }
  }, [user, router])

  return (
    user?.role === 'ADMIN' ? (
      <div>
        <ListUser />
      </div>
    ) : null
  )
}
