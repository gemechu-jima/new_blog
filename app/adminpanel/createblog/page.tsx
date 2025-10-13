import React from 'react'
import PostBlogForm from '@/app/model/postBlogForm'

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Create a New Blog Post</h1>
      <PostBlogForm />
    </main>
  )
}