import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Push day',
  description: 'Exercises I do to train my chest, triceps, side delts and abs'
}

export default function page() {
  return (
    <div className='flex flex-col items-center min-h-screen px-10 md:px-8 lg:px-12'>
      <div className='flex flex-col max-w-2xl w-full mx-auto my-auto text-white'>
        <h1 className='text-2xl text-center'>PUSH</h1>
        <h1>Single Arm Cross body triceps extension</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/b_ITzRs_Jbo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Single Arm Cable Fly High to Low</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/sR2Tf7TpJHw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Overhead Cable Tricep Extension</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/ns-RGsbzqok"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Incline Chest Press Machine</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/vWH3BqQEwAM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Seated Chest Press Machine</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/MJDtYLkFWEI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
    
        <h1>Cable Lateral Raise</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/J-6uEOkYAKM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <h1>Tricep Rope Press Down</h1>
        <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
        <iframe
          className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
          src="https://www.youtube.com/embed/8CbJK7mmisE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
