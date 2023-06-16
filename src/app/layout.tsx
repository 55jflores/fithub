import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fithubb',
  description: 'All your Fitness and BodyBuilding questions and answers in one website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href='/'><h1 className='dark:text-white text-red-700 text-center text-3xl'>FITHUBB</h1></Link>
        {children}
      </body>
    </html>
  )
}
