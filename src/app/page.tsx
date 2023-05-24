import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='text-center'>
      <Link href='/mysplit'><h1 className='text-cyan-500'>My Split</h1></Link>
      <Link href='/mysplit'><h1 className='text-cyan-500'>Unique Exercises</h1></Link>
      <h1 className='text-white'>Welcome Page goes here</h1>

    </div>
  )
}
