'use client'

import { useCartStore } from '@/store'
import { CartItem, CartTotal } from '@/components'

const Cart = () => {
  const { cart } = useCartStore()
  return (
    <div className='max-w-screen-xl mx-auto mt-10'>
      <div className='grid grid-cols-1 px-4 md:p-0 md:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-y-2'>
          {
            cart.length === 0 && (
              <div className='text-center text-2xl font-bold py-1 capitalize'>
                cart empty
              </div>
            )
          }

          {cart.map((guitar) => (
            <CartItem
              key={guitar.id}
              guitar={guitar} />
          ))}
        </div>

        <CartTotal />
      </div>
    </div>
  )
}

export default Cart
