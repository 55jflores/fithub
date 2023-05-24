import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Gym training split',
    description: 'Gym split that I am currently running'
}

export default function page() {
    return (
        <div className='flex flex-col items-center text-white'>
            <h1>I am currently running a Push Pull Legs Split</h1>
            <h2>Click on the tabs above to view the details of my workouts</h2>
            <h2>Push: Chest, Triceps. Side delts and abs are also trained on these days</h2>
            <h2>Pull: Back, Biceps. I also train rear delts and do cardio on these days</h2>
            <h2>Legs: Quads, Hamstrings, Glutes. I train nothing else since I am too tired to do so &#40;leg day, am I right lol&#41; </h2>

            <h2>How I structure my week:</h2>
            <ul className='list-disc list-inside'>
                <li>Monday: Pull</li>
                <li>Tuesday: Push</li>
                <li>Wednesday: Legs</li>
                <li>Thursday: Pull</li>
                <li>Friday: Push</li>
            </ul>  
        </div>
    )
}