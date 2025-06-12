import React from 'react'
import Link from 'next/link'
export default function Links({link, name}:{link:string, name:string}) {
  return (
    <Link href={`blog/${link}`}>{name}</Link>
  )
}
