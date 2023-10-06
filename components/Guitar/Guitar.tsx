'use client'

import Link from 'next/link'
import { formatMoney } from '@/helpers'
import { type GuitarType } from '@/interfaces'

const Guitar = ({ guitar }: { guitar: GuitarType }) => {
  const { nombre, image, precio } = guitar

  return (
    <div className="md:p-0.5 bg-zinc-800 relative duration-300 ease-in rounded-md group ring-transparent ring-2 hover:ring-blue-600">
      <div
        className="w-full overflow-hidden bg-white rounded-md cursor-pointer h-96 aspect-h-1 aspect-w-1 lg:aspect-none lg:h-80"
      >

        <Link
          href={`/shop/guitars/${nombre}`}
          title={`go to guitar ${nombre}`}
        >
          <img
            src={image}
            alt={nombre}
            width={150}
            height={300}
            className="object-contain object-center w-full h-full transition-transform ease-in-out lg:h-full lg:w-full hover:scale-95"
          />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 flex w-full px-2 pb-2">
        <div className="flex items-center p-1 text-xs font-semibold text-black border rounded-full bg-white/70 backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
          <p className="flex-grow pl-2 mr-4 leading-none tracking-tight uppercase line-clamp-2">{nombre}</p>
          <p className="flex-none p-2 text-white rounded-full bg-zinc-950">{formatMoney(precio)}</p>
        </div>
      </div>
    </div>
  )
}

export default Guitar
