'use client'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useCartStore } from '@/store'

import { formatMoney } from '@/helpers'
import { type GuitarType } from '@/interfaces'
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

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
    <section className="relative w-full md:h-screen">
      <div className="container relative px-2 pt-5 mx-auto">
        <Link href={'/shop'} className='button-black-gradient md:col-span-2 w-fit' >
          go back
        </Link>

        <div className="container relative grid items-center h-full pt-5 mx-auto md:grid-cols-2 gap-y-2 md:gap-y-0 gap-x-8">
          <div className="flex justify-center w-full bg-white rounded-md sm:px-6 lg:px-4">
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

          <div className='flex flex-col justify-center w-full h-full p-1'>

            <div>
              <small className='text-base text-zinc-500'>New</small>
              <h1 className="pb-3 text-2xl font-bold tracking-tight text-white capitalize border-b sm:text-3xl border-zinc-700">
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
                          'w-4 h-4 md:h-5 md:w-5 flex-shrink-0 `
                        }
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <span className="p-1 text-xs font-bold rounded bg-neutral-800">
                    {reviews.totalCount} reviews
                  </span>
                  |
                  <span className="p-1 text-xs font-bold truncate rounded bg-neutral-800">
                    +{reviews.totalCount} answered questions
                  </span>
                </div>
              </div>

            </div>

            <div className='flex flex-col [&>span]:text-zinc-400 [&>span]:text-sm border-b border-zinc-700 py-6'>
              <p className="flex items-center text-2xl font-bold text-white capitalize gap-x-3">
                {formatMoney(guitar?.precio)} USD <span className="p-1 text-xs font-bold bg-green-700 rounded">
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
              <small className='text-base capitalize text-zinc-500'>description</small>
              <p className="text-sm font-semibold tracking-wide text-white">
                {guitar?.descripcion}
              </p>
            </div>

            <div className='flex flex-col items-center w-full py-10 space-y-3 md:flex-row md:gap-x-2 md:space-y-0'>
              <form
                className='w-full font-medium text-white capitalize duration-300 ease-in rounded-lg'
              >
                <select
                  id="quantity"
                  className="w-full text-center button_primary"
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
                className="flex items-center justify-center w-full gap-2 text-white button_primary"
                onClick={() => { handleAddToCart(guitar, quantity) }}
              >
                Add to cart
                <ShoppingCartIcon className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default GuitarShop
