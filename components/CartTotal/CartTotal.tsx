'use client'

import { useCartStore } from '@/store'
import { formatMoney } from '@/helpers'

const CartTotal = () => {
  const { calculateTotal } = useCartStore()

  return (
    <div className="border-t border-zinc-700 md:border-none md:px-4 pb-6 sm:px-6">
      <h3 className='text-3xl font-bold my-3'>Cart Totals</h3>

      <div className="flex justify-between text-base font-medium capitalize mb-2">
        <p className='text-zinc-400'>tax estimate</p>
        <p className='text-zinc-100'>$1.00</p>
      </div>

      <div className="flex justify-between text-base capitalize font-medium mb-2">
        <p className='text-zinc-400'>total</p>
        <p className="text-zinc-100">{formatMoney(calculateTotal())}</p>
      </div>

      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

      <button
        className="mt-6 w-full capitalize flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-900 duration-300 ease-in-out"
      >
        buy
      </button>
    </div>
  )
}

export default CartTotal
