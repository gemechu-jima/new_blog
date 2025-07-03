'use client' // if you're using Next.js App Router

import React, { useEffect, useState } from 'react'


type PropsBackdrop = {
  onClick: () => void
  children: React.ReactNode
}

function Backdrop({ onClick, children }: PropsBackdrop) {
 

  return<div className="w-screen h-screen bg-black/70 fixed z-50"
      onClick={onClick}>
     {children}
  </div>
  
}

export default Backdrop

 