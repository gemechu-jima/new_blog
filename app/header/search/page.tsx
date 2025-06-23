import React from 'react'
import ThemeSwitcher from '@/components/theme'
import Link from 'next/link'
export default function Search() {
  return (
    <div className='flex gap-3'>
      <div>
        <Link href={'/login'}>login</Link>
      </div>
      <ThemeSwitcher/>
    </div>
  )
}
