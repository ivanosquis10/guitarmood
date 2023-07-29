'use client'

import { useCartStore } from '@/store'
import { formatMoney } from '@/helpers'
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const Cart = () => {
  const { cart, deleteItem, addQuantity, minusQuantity, calculateTotal } = useCartStore()
  return (
    <div className='max-w-screen-xl mx-auto mt-10 h-screen'>
      <div className='grid grid-cols-1 px-4 md:p-0 md:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-y-2'>
          {
            cart.length === 0 ? (
              <div className='text-center text-2xl font-bold py-1 capitalize'>
                cart empty
              </div>
            ) : (
              cart.map(guitar => (
                <div className="flex md:p-4 rounded border border-zinc-700/50 shadow-zinc-800">
                  <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-md border  bg-white">
                    <img
                      src={guitar.image}
                      width={220}
                      height={220}
                      alt='holajaskjaskjsa'
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <div className="md:ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium">
                        <h3 className='text-2xl font-bold text-white capitalize'>
                          {guitar.nombre}
                        </h3>
                        <p className="ml-4">{formatMoney(guitar.precio)}</p>
                      </div>
                      <div className="flex justify-between text-base text-zinc-500">
                        <p className='capitalize'>
                          subtotal
                        </p>
                        <p className="ml-4 text-sm tracking-wider">{formatMoney(guitar.precio * guitar.quantity)}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className='flex items-center gap-x-1'>




                        <p className="text-lg">Qty {guitar.quantity}</p>
                        <button
                          className={`border-2 border-zinc-700 duration-300 ease-in hover:bg-neutral-900`}
                          onClick={() => addQuantity(guitar.id)}
                          aria-label="Increase quantity"
                        >
                          <PlusIcon width={20} height={20} />
                          <span className="sr-only">Increase quantity</span>
                        </button>

                        <button className={`border-2 border-zinc-700 duration-300 ease-in hover:bg-neutral-900`}
                          onClick={() => minusQuantity(guitar.id)}
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon width={20} height={20} />
                          <span className="sr-only">Decrease quantity</span>
                        </button>
                      </div>




                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium hover:text-red-500 ease-in duration-300"
                          onClick={() => deleteItem(guitar.id)}
                          aria-label="Delete item"
                        >
                          <TrashIcon width={25} height={25} />
                          <span className="sr-only">Delete item</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>

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


      </div>

    </div>
  )
}

export default Cart
