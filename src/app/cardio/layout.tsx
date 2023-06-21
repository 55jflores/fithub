import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cardio',
  description: 'Talking about cardio and why it is important to do so'
}

export default function CardioLayout({children,}: {children: React.ReactNode}) {
    return (
        <>
            <main>
                <div className='flex justify-center'>
                    <div className='relative flex items-center space-x-4'>
                        <Link href='/cardio/'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Cardio</p>
                        </Link>
                        <Link href='/cardio/mycardio'>
                        <p className="ttext-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">My Cardio</p>
                        </Link>

                        <Link href='/nutrition/about'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">About Cardio</p>
                        </Link>
                        
                      
                    </div>
                </div>
                {children}
            </main>
        </>
    )
}
