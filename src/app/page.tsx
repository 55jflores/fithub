import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='text-center'>
      <Link href='/nutrition'><h1 className='text-cyan-500'>Nutrition</h1></Link>
      <Link href='/supplements'><h1 className='text-cyan-500'>Supplements</h1></Link>
      <Link href='/exercises'><h1 className='text-cyan-500'>Exercises</h1></Link>
      <Link href='/mysplit'><h1 className='text-cyan-500'>My Split</h1></Link>

      <Link href='/cardio'><h1 className='text-cyan-500'>Cardio</h1></Link>


      <h1 className='text-white'>Everything Fitness and BodyBuilding related in one website</h1>

    </div>
  )
}
