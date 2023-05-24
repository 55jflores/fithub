import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pull day',
  description: 'Exercises I do to train my back, biceps and rear delts'
}

export default function page() {
  return (
    <div className='flex flex-col items-center min-h-screen px-10 md:px-8 lg:px-12'>
      <div className='flex flex-col max-w-2xl w-full mx-auto my-auto text-white'>
        <h1 className='text-2xl text-center'>PULL</h1>
        <h1>Spider Curls</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/nvufDW-MSQk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Assisted Pull Up Machine</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/wFj808u2HWU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Hammer Curls</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/OPqe0kCxmR8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Row Machine</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/tYk2f1EuwV0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Standing Bicep Curls</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/ykJmrZ5v0Oo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <h1>Bent over single arem cable rear delt fly</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/UxUopdnBNJM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Rope Pullover</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/n14syJA6NLg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
