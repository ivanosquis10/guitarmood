import Image from 'next/image'
import Link from 'next/link'

import { ShoppingBagIcon, BookOpenIcon } from '@heroicons/react/20/solid'
const Hero = () => {
  return (
    <section id='hero' className="h-screen relative w-full flex items-center justify-center">
      <div className='bg-black/50 w-full h-screen absolute -z-10' />
      <Image
        src='/hero.jpg'
        alt='hero of the page'
        fill
        className='object-cover -z-20'
      />

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Welcome to GuitarMood</h1>

        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">Here we have the largest variety and quantity of guitars in the world. <br /> Come, take a look and be happy.</p>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">

          <Link href="#blog" className="w-full backdrop-blur-md hover:backdrop-blur-sm inline-flex justify-center items-center gap-x-1 py-3 px-5 text-base font-medium text-center rounded-lg border text-white transition-all duration-300 ease-in capitalize">
            blog
            <BookOpenIcon width={20} height={20} />

          </Link>

          <Link href="/shop" className="w-full backdrop-blur-md hover:backdrop-blur-sm inline-flex justify-center items-center gap-x-1 py-3 px-5 text-base font-medium text-center rounded-lg border text-white transition-all duration-300 ease-in capitalize">

            Shop
            <ShoppingBagIcon width={20} height={20} />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Hero
