import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nutrion',
  description: 'Talking about all things food and drink'
}

export default function NutritionLayout({children,}: {children: React.ReactNode}) {
    return (
        <>
            <main>
                <div className='flex justify-center'>
                    <div className='relative flex items-center space-x-4'>
                        <Link href='/nutrition/'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Nutrition</p>
                        </Link>
                        <Link href='/nutrition/food'>
                        <p className="ttext-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Food</p>
                        </Link>

                        <Link href='/nutrition/drink'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Drinks</p>
                        </Link>
                        
                        <Link href='/mysplit/snacks'>
                        <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Snacks</p>
                        </Link>
                    </div>
                </div>
                {children}
            </main>
        </>
    )
}
