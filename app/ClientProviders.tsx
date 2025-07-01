// app/ClientProviders.tsx
'use client';

import { SessionProvider } from 'next-auth/react'
import ToastProvider from "./useContext/useToast";
import GlobalProvider from '@/app/useContext/UseContext'
import React from 'react'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
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
