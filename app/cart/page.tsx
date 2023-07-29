import { Cart, Heading } from '@/components'

export default function Page() {
  return (
    <section className='pt-8 pb-16 md:pt-20 max-w-screen-xl mx-auto'>
      <Heading
        title='Cart Shop'
        subtitle='See your cart and buy!'
      />
      <Cart />
    </section>
  )
}