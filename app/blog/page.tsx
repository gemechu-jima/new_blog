import React from 'react'
import Formpost from './formpost'
import Links from './Links'

export default function Blog() {
  return (
    <div>
    <div className='grid sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-10'>
      <Links name='News' link='news'/>
    </div> 
    </div>
  )
}
