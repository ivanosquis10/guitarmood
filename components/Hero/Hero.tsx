import Image from 'next/image'
import Link from 'next/link'

import { ShoppingBagIcon, BookOpenIcon } from '@heroicons/react/20/solid'
const Hero = () => {
  return (
    <section id='hero' className="relative flex items-center justify-center w-full h-screen">
      <div className='absolute w-full h-screen bg-black/50 -z-10' />
      <Image
        src='/hero.jpg'
        alt='hero of the page'
        fill
        className='object-cover -z-20'
        priority
      />

      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-20 lg:px-12">

        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Welcome to <span className='bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-zinc-300 via-neutral-300 to-slate-200 bg-clip-text text-transparent'>GuitarMood</span></h1>

        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">Here we have the largest variety and quantity of guitars in the world. <br /> Come, take a look and be happy.</p>

        <div className="flex flex-col max-w-lg mx-auto mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

          <Link href="#blog" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-white capitalize transition-all duration-300 ease-in border rounded-lg backdrop-blur-md hover:backdrop-blur-sm gap-x-1">
            blog
            <BookOpenIcon width={20} height={20} />

          </Link>

          <Link href="/shop" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-white capitalize transition-all duration-300 ease-in border rounded-lg backdrop-blur-md hover:backdrop-blur-sm gap-x-1">

            Shop
            <ShoppingBagIcon width={20} height={20} />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Hero
