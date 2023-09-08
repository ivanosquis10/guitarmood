'use client'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useCartStore } from '@/store'

import { formatMoney } from '@/helpers'
import { type GuitarType } from '@/interfaces'
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'

interface Props {
  guitar: GuitarType
}

const GuitarShop = ({ guitar }: Props) => {
  const [quantity, setQuantity] = useState('')
  const { addToCart, reviews } = useCartStore()

  const handleAddToCart = (guitar: GuitarType, quantity: string) => {
    if (quantity === '') {
      toast.error('Put a quantity!', {
        position: 'top-right',
        duration: 2000,
        id: 'quantity'
      })
      return
    }

    const quantityNumber = Number(quantity)
    addToCart({
      ...guitar,
      quantity: quantityNumber
    })
  }

  return (
    <section className="w-full md:h-screen relative">
      <div className="pt-20 grid md:grid-cols-2 h-full items-center container mx-auto gap-x-8 px-4">

        <div className="flex justify-center w-full sm:px-6 lg:px-4 bg-white rounded-md">
          <div>
            <img
              src={guitar?.image}
              alt={`guitar ${guitar?.nombre}`}
              width={220}
              height={220}
              className='object-contain object-center'
            />
          </div>
        </div>

        <div className='w-full p-2 h-full flex flex-col justify-center'>

          <div>
            <small className='text-base text-zinc-500'>New</small>
            <h1 className="text-2xl font-bold capitalize tracking-tight text-white sm:text-3xl border-b border-zinc-700 pb-3">
              guitar - {guitar?.nombre}
            </h1>

            <div className="py-3 border-b border-zinc-700">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center gap-x-2">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`
                        ${reviews.average > rating ? 'text-yellow-400' : 'text-zinc-700'}
                        'h-5 w-5 flex-shrink-0 `
                      }
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <span className="text-xs p-1 rounded bg-neutral-800 font-bold">
                  {reviews.totalCount} reviews
                </span>
                |
                <span className="text-xs p-1 rounded bg-neutral-800 font-bold">
                  +{reviews.totalCount} answered questions
                </span>
              </div>
            </div>

          </div>

          <div className='flex flex-col [&>span]:text-zinc-400 [&>span]:text-sm border-b border-zinc-700 py-6'>
            <p className="text-2xl font-bold text-white capitalize flex items-center gap-x-3">
              {formatMoney(guitar?.precio)} USD <span className="text-xs p-1 rounded bg-green-700 font-bold">
                in stock
              </span>
            </p>
            <span>
              free shipping
            </span>
            <span>
              free return
            </span>
          </div>

          <div className='flex flex-col [&>span]:text-zinc-400 [&>span]:text-sm border-b border-zinc-700 py-6'>
            <small className='text-base text-zinc-500 capitalize'>description</small>
            <p className="text-sm tracking-wide font-semibold text-white">
              {guitar?.descripcion}
            </p>
          </div>

          <div className='py-10 w-full flex flex-col space-y-3 md:flex-row items-center md:gap-x-2 md:space-y-0'>
            <form
              className='w-full text-white font-medium rounded-lg duration-300 ease-in capitalize'
            >
              <select
                id="quantity"
                className="w-full rounded-lg text-center border-2 border-zinc-700 bg-zinc-800 hover:bg-neutral-900 py-3"
                value={quantity}
                onChange={(e) => { setQuantity(e.target.value) }}
              >
                <option disabled value="">Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>

            <button
              type="button"
              className="w-full text-white flex items-center justify-center button_primary gap-2"
              onClick={() => { handleAddToCart(guitar, quantity) }}
            >
              Add to cart
              <ShoppingCartIcon width={25} height={25} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default GuitarShop
