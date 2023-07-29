import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer, Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })
import './globals.css'
// import { CartProvider } from '@/context'

export const metadata: Metadata = {
  title: 'GuitarMood',
  description: 'The best place to buy a guitar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white overflow-x-hidden relative scroll-smooth`}>
        {/* <CartProvider> */}
        <Navbar />
        {children}
        <Footer />
        {/* </CartProvider> */}
      </body>
    </html>
  )
}
