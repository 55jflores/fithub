import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <main>
          <div className='flex justify-center'>
            <div className='relative flex items-center space-x-4'>
              <Link href='/nutrition'><h1 className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Nutrition</h1></Link>
              <Link href='/supplements'><h1 className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Supplements</h1></Link>
              <Link href='/exercises'><h1 className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Exercises</h1></Link>
              <Link href='/mysplit'><h1 className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">My Split</h1></Link>
              <Link href='/cardio'><h1 className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Cardio</h1></Link>


            </div>

        </div>
        <div className='relative flex justify-center items-center'>
        <h1 className='text-white'>Everything Fitness and BodyBuilding related in one website</h1>

        </div>

      </main>
    </>
  )
}
