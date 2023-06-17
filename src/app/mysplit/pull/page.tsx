import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pull day',
  description: 'Exercises I do to train my back, biceps and rear delts'
}

export default function page() {
  return (
    <div className='flex flex-col items-center min-h-screen px-10 md:px-8 lg:px-12 text-white'>
      <h1 className='text-2xl text-center'>PULL</h1>
      <p>Words go here</p>
      <p>Words go here</p>
      <p>Words go here</p>
      <p>Words go here</p>
      <p>Words go here</p>
      <p>Words go here</p>
      <div className='flex flex-col max-w-2xl w-full mx-auto my-auto'>
        <div className='space-y-4'>

          <details className='bg-gray-700 shadow rounded group mb-4'>
            <summary className='list-none hide-arrow flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500 rounded group-open:rounded-b-none group-open:z-[1] relative'>
              <h3 className='flex flex-1 p-4 font-semibold'>Spider Curls</h3> 
              <div className='flex w-10 items-center justify-center'>
                <div className='border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left'></div>  
              </div>
            </summary>

            <div className='p-4'>
              <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
              <iframe
                className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
                src="https://www.youtube.com/embed/nvufDW-MSQk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>  
          </details>
       
          <details className='bg-gray-700 shadow rounded group mb-4'>
            <summary className='list-none hide-arrow flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500 rounded group-open:rounded-b-none group-open:z-[1] relative'>
              <h3 className='flex flex-1 p-4 font-semibold'>Assisted Pull Up Machine</h3> 
              <div className='flex w-10 items-center justify-center'>
                <div className='border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left'></div>  
              </div>
            </summary>

            <div>
              <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
              <iframe
                className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
                src="https://www.youtube.com/embed/wFj808u2HWU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </details>
        
          <details className='bg-gray-700 shadow rounded group mb-4'>
            <summary className='list-none hide-arrow flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500 rounded group-open:rounded-b-none group-open:z-[1] relative'>
              <h3 className='flex flex-1 p-4 font-semibold'>Hammer Curls</h3> 
              <div className='flex w-10 items-center justify-center'>
                <div className='border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left'></div>  
              </div>
            </summary>

            <div className='p-4'>
              <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
              <iframe
                className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
                src="https://www.youtube.com/embed/OPqe0kCxmR8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </details>
      
          <details className='bg-gray-700 shadow rounded group mb-4'>
            <summary className='list-none hide-arrow flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500 rounded group-open:rounded-b-none group-open:z-[1] relative'>
              <h3 className='flex flex-1 p-4 font-semibold'>Row Machine</h3> 
              <div className='flex w-10 items-center justify-center'>
                <div className='border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left'></div>  
              </div>
            </summary>

            <div className='p-4'>
              <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
              <iframe
                className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
                src="https://www.youtube.com/embed/tYk2f1EuwV0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </details>
       
          <details className='bg-gray-700 shadow rounded group mb-4'>
            <summary className='list-none hide-arrow flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500 rounded group-open:rounded-b-none group-open:z-[1] relative'>
              <h3 className='flex flex-1 p-4 font-semibold'>Standing Barbbell Bicep Curls</h3> 
              <div className='flex w-10 items-center justify-center'>
                <div className='border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left'></div>  
              </div>
            </summary>

            <div className='p-4'>
              <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
              <iframe 
                className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9' 
                src="https://www.youtube.com/embed/dDI8ClxRS04" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen />
            </div>  
          </details>
      
          <details className='bg-gray-700 shadow rounded group mb-4'>
            <summary className='list-none hide-arrow flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500 rounded group-open:rounded-b-none group-open:z-[1] relative'>
              <h3 className='flex flex-1 p-4 font-semibold'>Unilateral Cable Rear Delt Fly</h3> 
              <div className='flex w-10 items-center justify-center'>
                <div className='border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left'></div>  
              </div>
            </summary>

            <div>
              <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
              <iframe 
                className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
                src="https://www.youtube.com/embed/Uz81XugWbG0" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen />
            </div>
          </details>
       
          <details className='bg-gray-700 shadow rounded group mb-4'>
            <summary className='list-none hide-arrow flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500 rounded group-open:rounded-b-none group-open:z-[1] relative'>
              <h3 className='flex flex-1 p-4 font-semibold'>Rope Pullover</h3> 
              <div className='flex w-10 items-center justify-center'>
                <div className='border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left'></div>  
              </div>
            </summary>

            <div className='p-4'>
              <h1>Set 1: 15 Set 2: 12 Set 3: 12</h1>
              <iframe
                className='w-full h-64 md:h-96 lg:h-128 aspect-w-16 aspect-h-9'
                src="https://www.youtube.com/embed/n14syJA6NLg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </details>

        </div>
      </div>
    </div>
  )
}
