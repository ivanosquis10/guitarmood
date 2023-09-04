// 'use client'

// import { createContext } from 'react'
// import { Cart } from '@/interfaces'

// interface CartContextProps {
//   // Properties
//   cart: Cart[]

//   // methods
//   // addToCart: (item: Cart) => void
// }

// // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
// export const CartContext = createContext({} as CartContextProps)

'use client'

import { type Cart } from '@/interfaces'
import { createContext, createServerContext } from 'react'

interface CartContextProps {
  // Properties
  cart: Cart[]
}

export const CartContext = createContext({} as CartContextProps)
