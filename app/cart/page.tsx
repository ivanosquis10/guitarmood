import { Toaster } from 'react-hot-toast'
import { Cart, Heading } from '@/components'

export default function Page() {
  return (
    <section className='pt-20 max-w-screen-xl mx-auto h-screen'>
      <Heading
        title='Cart Shop'
        subtitle='See your cart and buy!'
      />
      <Toaster />
      <Cart />
    </section>
  )
}
