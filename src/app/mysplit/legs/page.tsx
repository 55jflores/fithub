
import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leg day',
  description: 'Exercises I do to train my quads, glutes and hamstrings'
}

export default function Legs() {
  return (
    <div className='flex flex-col items-center min-h-screen px-10 md:px-8 lg:px-12  text-white'>
        <h1 className='text-2xl text-center'>LEGS</h1>
        <p>Words go here</p>
        <p>Words go here</p>
        <p>Words go here</p>
        <p>Words go here</p>
        <p>Words go here</p>
        <p>Words go here</p>

      <div className='flex flex-col max-w-2xl w-full mx-auto my-auto'>
        <div className='space-y-4'>

        <details>
          <summary>Leg Extensions</summary>
          <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
          <iframe
            className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
            src="https://www.youtube.com/embed/8Jqof7z3QYM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </details>
    
        <details>
          <summary>Leg Curls</summary>
          <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
          <iframe
            className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
            src="https://www.youtube.com/embed/fK0uZ3KRZRI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </details>
    
        <details>
          <summary>Smith Machine Bulgarian Split Squats</summary>
          <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
          <iframe
            className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
            src="https://www.youtube.com/embed/oLi2QcD0B3M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </details>
    
        <details>
          <summary>Smith Machine Hip Thrust</summary>
          <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
          <iframe
            className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
            src="https://www.youtube.com/embed/s6u3ESE4kMg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </details>
    
        <details>
          <summary>Smith Machine Hack Squat</summary>
          <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
          <iframe
            className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
            src="https://www.youtube.com/embed/i2LRBez5xZY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </details>
    
        <details>
          <summary>Cable Pullthrough</summary>
          <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
          <iframe
            className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
            src="https://www.youtube.com/embed/4oZ_0_bQcOg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </details>
        </div>

      </div>
    </div>
  )
}
