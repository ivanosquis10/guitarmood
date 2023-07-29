// 'use client'

// import { FC, ReactNode, useState } from 'react'
// import { CartContext } from '../index'
// import { Cart } from '@/interfaces'

// interface Props {
//   children: ReactNode
// }

// export const CartProvider: FC<Props> = ({ children }) => {
//   const [cart, setCart] = useState<Cart[]>([
//     {
//       id: 1,
//       title: 'hola'
//     }
//   ])

//   const addToCart = (item: Cart) => {
//     console.log(item)
//     // setCart([...cart, item])
//   }

//   return (
//     <CartContext.Provider value={{
//       // properties
//       cart,

//       // methods
//       // addToCart
//     }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

'use client'

import { FC, ReactNode, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Cart } from '@/interfaces'

interface Props {
  children: ReactNode
}
export const CartProvider: FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([
    {
      id: 1,
      title: 'hola'
    }
  ])
  return (
    <CartContext.Provider value={{
      // properties
      cart,
    }}
    >{children}
    </CartContext.Provider>
  )
}