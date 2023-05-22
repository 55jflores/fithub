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
                        <Link href='/mysplit/push'>
                            <p>PUSH</p>
                        </Link>

                        <Link href='/mysplit/pull'>
                            <p>PULL</p>
                        </Link>
                        
                        <Link href='/mysplit/legs'>
                            <p>LEGS</p>
                        </Link>
                    </div>
                </div>
                {children}
            </main>
        </>
    )
}
