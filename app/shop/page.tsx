import { Guitar, Heading } from '@/components'
import { getGuitars } from '@/services'

export default async function Page () {
  const guitarFetch = getGuitars()
  const guitarras = await guitarFetch
  return (
    <section className='pt-8 pb-16 md:pt-24 max-w-screen-xl mx-auto'>
      <Heading
        title='our guitars collection'
        subtitle='see our best-selling and most quoted guitars'
      />
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            guitarras?.map(guitar => (
              <Guitar key={guitar.id} guitar={guitar} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
