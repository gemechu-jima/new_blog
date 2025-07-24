'use client'

import React, { useEffect } from 'react'
import {ErrorProps} from '@/types/error'

export default function ErrorPage({ error, reset }:ErrorProps) {
  useEffect(() => {
    console.error('❌ Error caught by error.tsx:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-red-50 text-red-700">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-4 text-center max-w-md">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  )
}

