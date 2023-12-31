'use client'

import { useCartStore } from '@/store'
import { formatMoney } from '@/helpers'
import type { GuitarShop } from '@/interfaces'
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const CartItem = ({ guitar }: { guitar: GuitarShop }) => {
  const { deleteItem, addQuantity, minusQuantity } = useCartStore()

  return (
    <div className="flex flex-col md:flex-row p-2 gap-2 md:gap-x-0 md:p-4 rounded border border-zinc-700/50 shadow-zinc-800">
      <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-md border  bg-white">
        <img
          src={guitar.image}
          width='auto'
          height='auto'
          alt={`Guitar ${guitar.nombre}`}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="md:ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between items-center text-base font-medium">
            <h3 className='text-xl md:text-2xl font-bold text-white capitalize'>
              {guitar.nombre}
            </h3>
            <p className="">{formatMoney(guitar.precio)}</p>
          </div>
          <div className="flex justify-between text-base text-zinc-500">
            <p className='capitalize'>
              subtotal
            </p>
            <p className="ml-4 text-sm tracking-wider">{formatMoney(guitar.precio * guitar.quantity)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm mt-5 md:mt-0">
          <div className='flex items-center gap-x-1'>

            <p className="text-base md:text-lg">Qty {guitar.quantity}</p>
            <button
              className={'border-2 border-zinc-700 duration-300 ease-in hover:bg-neutral-900'}
              onClick={() => { addQuantity(guitar.id) }}
              aria-label="Increase quantity"
            >
              <PlusIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="sr-only">Increase quantity</span>
            </button>

            <button className={'border-2 border-zinc-700 duration-300 ease-in hover:bg-neutral-900'}
              onClick={() => { minusQuantity(guitar.id) }}
              aria-label="Decrease quantity"
            >
              <MinusIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="sr-only">Decrease quantity</span>
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium hover:text-red-500 ease-in duration-300"
              onClick={() => { deleteItem(guitar.id) }}
              aria-label="Delete item"
            >
              <TrashIcon width={25} height={25} />
              <span className="sr-only">Delete item</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
