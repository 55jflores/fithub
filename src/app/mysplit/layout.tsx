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
                            <p className='text-cyan-300'>SPLIT</p>
                        </Link>
                        <Link href='/mysplit/push'>
                            <p className='text-cyan-700'>PUSH</p>
                        </Link>

                        <Link href='/mysplit/pull'>
                            <p className='text-cyan-700'>PULL</p>
                        </Link>
                        
                        <Link href='/mysplit/legs'>
                            <p className='text-cyan-700'>LEGS</p>
                        </Link>
                    </div>
                </div>
                {children}
            </main>
        </>
    )
}
