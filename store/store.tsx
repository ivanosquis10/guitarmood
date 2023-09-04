'use client'

import { create } from 'zustand'
import { type GuitarShop } from '../interfaces'

interface StoreCar {
  cart: GuitarShop[]
  // total: number
  addToCart: (item: GuitarShop) => void
  deleteItem: (id: number) => void
  addQuantity: (id: number) => void
  minusQuantity: (id: number) => void
  calculateTotal: () => number
}

export const useCartStore = create<StoreCar>((set, get) => ({
  cart: [],
  addToCart: (item: GuitarShop) => {
    set((state) => {
      // validamos si esta en el carrito
      const isAlreadyInCart = state.cart.find((guitar) => guitar.id === item.id)
      if (isAlreadyInCart) {
        // en caso de que este, iteramos para conseguirlo
        const cartUpdate = state.cart.map((guitar) => {
          // comparamos el id
          if (guitar.id === item.id) {
            // y actualizamos la cantidad
            return { ...guitar, quantity: guitar.quantity + item.quantity }
          }
          return guitar
        })
        // get().calculateTotal()
        return { ...state, cart: cartUpdate }
      }

      // get().calculateTotal()
      return { ...state, cart: [...state.cart, item] }
    })
  },
  deleteItem: (id: number) => {
    set((state) => {
      const cartUpdate = state.cart.filter((guitar) => guitar.id !== id)
      return { ...state, cart: cartUpdate }
    })
  },

  addQuantity: (id: number) => {
    set((state) => {
      const cartUpdate = state.cart.map((guitar) => {
        if (guitar.id === id) {
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

}))
