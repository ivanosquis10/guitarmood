/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { type GuitarShop } from '../interfaces'

interface Store {
  cart: GuitarShop[]
  reviews: { average: number, totalCount: number }
  addToCart: (item: GuitarShop) => void
  deleteItem: (id: number) => void
  addQuantity: (id: number) => void
  minusQuantity: (id: number) => void
  calculateTotal: () => number
}

export const useCartStore = create<Store>()(
  persist(
    (set, get) => ({
      cart: (localStorage.getItem('cart') != null) ? JSON.parse(localStorage.getItem('cart')!) : [],
      reviews: { average: 4, totalCount: 117 },
      addToCart: (item: GuitarShop) => {
        set((state) => {
          // validamos si esta en el carrito
          const isAlreadyInCart = state.cart.find((guitar) => guitar.id === item.id)
          if (isAlreadyInCart != null) {
            // en caso de que este, iteramos para conseguirlo
            const cartUpdate = state.cart.map((guitar) => {
              // comparamos el id
              if (guitar.id === item.id) {
                // y actualizamos la cantidadme dice
                return { ...guitar, quantity: guitar.quantity + item.quantity }
              }
              return guitar
            })
            // get().calculateTotal()
            return { ...state, cart: cartUpdate }
          }

          // get().calculateTotal()
          toast.success('Guitar added successfully', {
            duration: 1000,
            position: 'top-right'
          })
          return { ...state, cart: [...state.cart, item] }
        })
      },
      deleteItem: (id: number) => {
        set((state) => {
          const cartUpdate = state.cart.filter((guitar) => guitar.id !== id)

          toast.error('Guitar eliminated successfully', {
            duration: 1000,
            position: 'top-right'
          })

          return { ...state, cart: cartUpdate }
        })
      },

      addQuantity: (id: number) => {
        set((state) => {
          const cartUpdate = state.cart.map((guitar) => {
            if (guitar.id === id && guitar.quantity <= 10) {
              return { ...guitar, quantity: guitar.quantity + 1 }
            }
            return guitar
          })
          return { ...state, cart: cartUpdate }
        })
      },
      minusQuantity: (id: number) => {
        set((state) => {
          const cartUpdate = state.cart.map((guitar) => {
            if (guitar.id === id && guitar.quantity > 1) {
              return { ...guitar, quantity: guitar.quantity - 1 }
            }
            return guitar
          })
          return { ...state, cart: cartUpdate }
        })
      },
      calculateTotal: () => {
        return get().cart.reduce((acc, guitar) => acc + guitar.quantity * guitar.precio, 0)
      }
    }), {
    name: 'cart'
  }
  )
)
