import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Exercises',
  description: 'Talking about why it is important to workout a specific muscle'
}

export default function Exercises({children,}: {children: React.ReactNode}) {
    return (
        <>
            <main>
                <div className='flex justify-center'>
                    <div className='relative flex items-center space-x-4'>
                        <Link href='/exercices/'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Exercises</p>
                        </Link>
                        <Link href='/exercices/push'>
                        <p className="ttext-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">PUSH</p>
                        </Link>

                        <Link href='/exercices/pull'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">PULL</p>
                        </Link>
                        
                        <Link href='/exercices/legs'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">LEGS</p>
                        </Link>
                    </div>
                </div>
                {children}
            </main>
        </>
    )
}
