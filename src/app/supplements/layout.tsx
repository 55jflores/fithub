import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Supplements',
  description: 'Page for various gym and lifestyle supplements'
}

export default function MySupplementsLayout({children,}: {children: React.ReactNode}) {
    return (
        <>
        <main>
            <div className='flex justify-center'>
                <div className='relative flex items-center space-x-4'>
                    <Link href='/supplements/'>
                        <p className='text-cyan-300'>Supplements</p>
                    </Link>
                    <Link href='/supplements/gym'>
                        <p className='text-cyan-700'>Gym</p>
                    </Link>

                    <Link href='/supplements/vitamins'>
                        <p className='text-cyan-700'>Vitamins</p>
                    </Link>
                    
                </div>
            </div>
            {children}
        </main>
    </>
  )
}
