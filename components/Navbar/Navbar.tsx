// 'use client'

// import Link from 'next/link'
// import { useCartStore, useMenuMobileStore } from '@/store'

// import { ShoppingCartIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline'
// import { type LinksNavs } from '@/interfaces'

// const linksNav: LinksNavs[] = [
//   {
//     id: 1,
//     path: '/',
//     title: 'home'
//   },
//   // {
//   //   id: 3,
//   //   path: 'blog',
//   //   title: 'blog'
//   // },
//   {
//     id: 4,
//     path: 'shop',
//     title: 'shop'
//   }
//   // {
//   //   id: 5,
//   //   path: 'cart',
//   //   title: 'cart',
//   //   icon: <ShoppingCartIcon width={25} height={25} />,
//   //   count: '2'
//   // }
// ]

// const Navbar = () => {
//   const { cart } = useCartStore()
//   const { menuOpen, toggleMenu, closeMenu } = useMenuMobileStore()

//   return (
//     <header id='header' className='relative w-full'>
//       <nav className="fixed z-50 w-full bg-neutral-800/90 backdrop-blur-3xl md:backdrop-blur">
//         <div className="flex flex-wrap items-center justify-between px-4 py-4 mx-auto max-w-7xl md:px-0">
//           <Link href='/' className='flex items-center' passHref>
//             <img
//               src='/icons/logo.svg'
//               alt='logo GuitarMood'
//               width={40}
//               height={40}
//             />
//             <h2 className='font-bold uppercase md:text-2xl'>GuitarMood</h2>
//           </Link>

//           <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center justify-center w-10 h-10 text-sm border rounded-lg border-zinc-600 md:hidden" aria-controls="navbar-default" aria-expanded="false"
//             onClick={toggleMenu}
//           >
//             <span className="sr-only">Open main menu</span>
//             {/* <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 17 14">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//             </svg> */}
//             <Bars3BottomRightIcon className='w-6 h-6' />
//           </button>

//           <div className={`${menuOpen ? 'block h-screen' : 'hidden'} w-full md:block md:w-auto md:h-full`} id="navbar-default">
//             <ul className="flex flex-col p-4 mt-4 rounded-lg md:items-center md:p-0 md:flex-row md:space-x-8 md:mt-0">
//               {
//                 linksNav.map(({ id, path, title }) => (
//                   <li key={id}>
//                     <Link href={`/${path}`} className="relative block py-5 pl-3 pr-4 text-xl font-bold text-white capitalize transition-opacity duration-300 ease-in-out border-b md:text-base md:py-2 md:p-0 hover:text-slate-200 md:border-transparent hover:border-b-white" aria-current="page" passHref
//                       onClick={() => { closeMenu() }}
//                     >
//                       {title}
//                     </Link>
//                   </li>
//                 ))
//               }
//               <li className='relative mt-2 hover:bg-zinc-700 md:rounded-full md:mt-0'>
//                 <Link href='/cart' className="relative block p-5 text-xl font-bold text-white underline capitalize transition-all duration-300 ease-in md:text-base md:no-underline md:px-2 md:py-1 hover:text-slate-200" aria-current="page" passHref
//                   onClick={() => { closeMenu() }}
//                 >
//                   <ShoppingCartIcon width={25} height={25} />
//                 </Link>
//                 <div className={`${cart.length === 0 ? 'hidden' : 'absolute'} top-0 right-0 bg-zinc-800 font-black rounded-full w-6 h-6 md:w-4 md:h-4 flex justify-center items-center text-lg md:text-xs tracking-tighter`}>
//                   {cart.length <= 8 ? cart.length : '8+'}
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header >
//   )
// }

// export default Navbar
