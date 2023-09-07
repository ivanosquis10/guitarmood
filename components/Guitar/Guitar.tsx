'use client'

import Link from 'next/link'
import { formatMoney } from '@/helpers'
import { type GuitarType } from '@/interfaces'

const Guitar = ({ guitar }: { guitar: GuitarType }) => {
  const { nombre, image, precio } = guitar

  return (
    <div className="group relative hover:scale-105 duration-300 ease-in">
      <div
        className="h-96 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none lg:h-80 cursor-pointer"
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
            className="h-full w-full object-contain object-center lg:h-full lg:w-full hover:scale-90 transition-transform ease-in-out"

          />
        </Link>
      </div>

      <div className="flex justify-between items-center p-2 absolute bottom-[-20px] rounded-b-md right-0 left-0 bg-zinc-800 border border-zinc-700">
        <h3 className="text-xl font-bold text-white capitalize">
          {nombre}
        </h3>
        <p className="text-base font-medium">{formatMoney(precio)}</p>
      </div>
    </div>
  )
}

export default Guitar
