import React from 'react'
const videos=[
  {
    id: 1,
    title: 'Give me 7 Minutes and I change the Story of Your Life',
    description: 'Give me 7 Minutes and I change the Story of Your Life',
    url: 'https://www.youtube.com/embed/qBaxLUOewE4'
  },
  {
    id: 2,
    title: 'Escape World War 3 with Game Theory',
    description: 'Escape World War 3 with Game Theory',
    url: 'https://www.youtube.com/embed/k1TPJq8XoIM'
  },
  {
    id: 3,
    title: 'How To Raise Strong Men | 3 Grim Cycles',
    description: 'Grim has many senior members and by looking at their families you can tell, what a young blood needs to become a man. And its never to late to go in this path of initiation. Be honorable.',
    url: 'https://www.youtube.com/embed/ZeRXKZ8JWow'
  }
]
export default function Video() {
  return (
    <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-4 '>
        
          {videos.map((video) => (
            <div key={video.id} className='mx-auto flex flex-col relative  mb-4'>
              <iframe
                width="280"
                height="240"
                src={video.url}
                frameBorder="3"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className='text-lg font-semibold line-clamp-1 text-ellipsis'>{video.title}</h3>
              <p className='w-64 line-clamp-2 text-ellipsis'>{video.description}</p>
            </div>
          ))}
  
    </div>
  )
}
