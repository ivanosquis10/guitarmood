import { Toaster } from 'react-hot-toast'
// import { Notification } from '@/components'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}
