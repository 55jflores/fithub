import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nutrition',
    description: 'Everything food and drink wise'
}

export default function page() {
    return (
        <div className='flex flex-col items-center text-white'>
            <h1>Nutrition</h1>
            <h2>Click on the tabs above learn a bit about nutrition and what I eat on a usual basis</h2>

        </div>
    )
}