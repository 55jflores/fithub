import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fithubb',
  description: 'All your Fitness and bodybuilding needs in one website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href='/'><h1 className='text-white text-center text-3xl'>FITHUB</h1></Link>
        {children}
      </body>
    </html>
  )
}
