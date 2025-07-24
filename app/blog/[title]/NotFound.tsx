// app/not-found.tsx
import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link href="/blog" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  )
}
