import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GuitarMood',
  description: 'The best place to buy a guitar. We have the best guitars in the world and the best prices.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white overflow-x-hidden relative scroll-smooth`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
