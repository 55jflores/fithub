
import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leg day',
  description: 'Exercises I do to train my quads, glutes and hamstrings'
}

export default function Legs() {
  return (
    <div className='flex flex-col items-center'>

      <p>Leg Extensions</p>
      <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
      <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/8Jqof7z3QYM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <p>Leg Curls</p>
      <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
      <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/fK0uZ3KRZRI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <p>Smith Machine Bulgarian Split Squats</p>
      <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
      <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/oLi2QcD0B3M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <p>Smith Machine Hip Thrust</p>
      <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
      <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/s6u3ESE4kMg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <p>Smith Machine Hack Squat</p>
      <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
      <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/i2LRBez5xZY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <p>Cable Pullthrough</p>
      <p>Set 1: 15 Set 2: 12 Set 3: 12</p>
      <iframe className='w-full aspect-video'  src="https://www.youtube.com/embed/4oZ_0_bQcOg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
   
    </div>
  )
}
