import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supplements',
  description: 'Page for various gym and lifestyle supplements'
}

export default function Supplements() {
  return (
    <div className='flex flex-col items-center text-white'>
            <h1>Creatine, protein supplements, vitamins etc </h1>
            <h2>Click on tabs to view the types of supplements I take, both for gym and/or lifestyle wise</h2>

            <h2>Supplements I currently take:</h2>
            <ul className='list-disc list-inside'>
                <li>Creatine Monohydrate</li>
                <li>Protein powder, bars, etc</li>
                <li>Omega Fish Oil</li>
                <li>Vitamin D</li>
                <li>Magnesium Citrate</li>
                <li>Ashwaganda Sensoril</li>

            </ul>  
        </div>
  )
}
