import React from 'react'

export default function Video() {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <div className='flex relative flex-col bg-amber-50 m-1 items-center  pt-9'>
        <iframe
          width="280"
          height="240"
          src="https://www.youtube.com/embed/qBaxLUOewE4"
          frameBorder="3"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className='w-64 line-clamp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore, quas exercitationem doloribus animi voluptatibus neque explicabo consequatur fugiat minima repellat modi officia repellendus tenetur sunt. Odio ratione laudantium temporibus.
        </p>
      </div>
    </div>
  )
}
