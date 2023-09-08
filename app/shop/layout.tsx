import { Toaster } from 'react-hot-toast'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}
