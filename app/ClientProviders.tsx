// app/ClientProviders.tsx
'use client';
import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'
import ToastProvider from "./useContext/useToast";
import GlobalProvider from '@/app/useContext/UseContext'
import React from 'react'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleChunkError = (e: ErrorEvent) => {
      if (e.message?.includes('Loading chunk')) {
        window.location.reload()
      }
    }

    window.addEventListener('error', handleChunkError)

    return () => {
      window.removeEventListener('error', handleChunkError)
    }
  }, [])

  return (
    <SessionProvider>
      <ToastProvider>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </ToastProvider>
    </SessionProvider>
  )
}
