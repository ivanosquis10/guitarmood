'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useCartStore } from '@/store'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'

type LinksNavs = {
  id: number
  path: string
  title: string
  icon?: JSX.Element
  count?: string
}

const linksNav: LinksNavs[] = [
  {
    id: 1,
    path: '/',
    title: 'home',
  },
  // {
  //   id: 2,
  //   path: 'about',
  //   title: 'about',
  // },
  {
    id: 3,
    path: 'blog',
    title: 'blog',
  },
  {
    id: 4,
    path: 'shop',
    title: 'shop',
  },
  // {
  //   id: 5,
  //   path: 'cart',
  //   title: 'cart',
  //   icon: <ShoppingCartIcon width={25} height={25} />,
  //   count: '2'
  // }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cart } = useCartStore()

  const handleMenu = () => setMenuOpen(!menuOpen)


  return (
    <header className='w-full relative'>
      <nav className="bg-neutral-800/50 backdrop-blur-3xl md:backdrop-blur z-50 fixed w-full">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4">
          <Link href='/' className='flex items-end' passHref>
            <Image
              src='/icons/logo.svg'
              alt='logo GuitarMood'
              width={40}
              height={40}
            />
            <h2 className='font-bold uppercase text-2xl'>GuitarMood</h2>
          </Link>

          <button data-collapse-toggle="navbar-default" type="button" className="border border-zinc-700 inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-zinc-900" aria-controls="navbar-default" aria-expanded="false"
            onClick={handleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>


          <div className={`${menuOpen ? 'block h-screen' : 'hidden'} w-full md:block md:w-auto md:h-full`} id="navbar-default">
            <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0">
              {
                linksNav.map(({ id, path, icon, title }) => (
                  <li key={id}>
                    <Link href={`/${path}`} className="relative text-xl md:text-base block py-5 underline md:no-underline md:py-2 pl-3 pr-4 text-white md:p-0 capitalize duration-300 ease-in transition-all hover:text-slate-200 font-bold" aria-current="page" passHref >
                      {icon ? icon : title}
                    </Link>
                  </li>
                ))
              }
              <li className='relative'>
                <Link href='/cart' className="relative text-xl md:text-base block py-5 underline md:no-underline md:py-2 pl-3 pr-4 text-white md:p-0 capitalize duration-300 ease-in transition-all hover:text-slate-200 font-bold" aria-current="page" passHref >
                  <ShoppingCartIcon width={25} height={25} />
                </Link>
                <div className={`${cart.length === 0 ? 'hidden' : 'absolute'} top-0 right-0 bg-zinc-800 font-black rounded-full w-4 h-4 flex justify-center items-center text-xs tracking-tighter`}>
                  {cart.length <= 8 ? cart.length : '8+'}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar