'use client'

import Link from 'next/link'
import { useCartStore } from '@/store'
import { CartIcon } from '../Icons/Icons'

const Header = () => {
  const { cart } = useCartStore()
  return (
    <header className='border-b border-zinc-700'>
      <nav className="container relative flex items-center justify-between p-4 mx-auto md:p-2 h-14">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <Link
              className="flex items-center w-full mr-2 md:w-auto lg:mr-6"
              href="/"
            >
              <div className="flex flex-none items-center justify-center  bg-black border border-zinc-600 h-[45px] w-[45px] rounded-lg">
                <img src='/logo-guitar.svg' width={40} height={40} alt='logo of the page' />
              </div>
              <span className="flex-none hidden ml-2 text-sm font-medium uppercase lg:block">
                GUITARMOOD
              </span>
            </Link>
            <ul className="flex items-center gap-2 text-sm md:gap-6">
              <li>
                <Link
                  className="text-neutral-300 underline-offset-4 hover:underline hover:text-neutral-100"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-300 underline-offset-4 hover:underline hover:text-neutral-100"
                  href="/shop"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-end md:w-1/3">
            <Link href='/cart'>
              <div className="relative flex items-center justify-center text-black transition-colors border rounded-md h-11 w-11 border-neutral-200 dark:border-neutral-700 dark:text-white">
                {cart.length !== 0 && <div className="absolute -right-2 top-0 text-center h-4 w-4 rounded bg-white text-[11px] font-medium text-black">{cart.length}</div>}
                <CartIcon />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
