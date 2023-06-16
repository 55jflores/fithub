import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Split',
  description: 'Talking about my gym workout split'
}

export default function MySplitLayout({children,}: {children: React.ReactNode}) {
    return (
        <>
            <main>
                <div className='flex justify-center'>
                    <div className='relative flex items-center space-x-4'>
                        <Link href='/mysplit/'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">SPLIT</p>
                        </Link>
                        <Link href='/mysplit/push'>
                        <p className="ttext-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">PUSH</p>
                        </Link>

                        <Link href='/mysplit/pull'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">PULL</p>
                        </Link>
                        
                        <Link href='/mysplit/legs'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">LEGS</p>
                        </Link>
                    </div>
                </div>
                {children}
            </main>
        </>
    )
}
