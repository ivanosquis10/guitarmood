import { getGuitars } from '@/services'
import { Guitar, Heading } from '@/components'
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

const GuitarsSection = async () => {
  const guitarras = await getGuitars(8)
  return (
    <section className='relative max-w-screen-xl mx-auto px-4 md:px-0 py-8 md:py-16'>
      <Heading
        title='Our collection'
        subtitle='Here are our best-selling and most quoted guitars'
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

      <div className='px-4 pt-5 flex justify-center mx-auto max-w-screen-xl md:pt-0 lg:px-6'>
        <button className='flex items-center justify-center gap-x-2 font-bold w-full md:w-1/3 p-2 border border-zinc-700 rounded-md hover:bg-neutral-800 ease-in duration-300'>
          See more
          <ChevronDoubleRightIcon width={25} height={25} />
        </button>
      </div>

    </section>

  )
}

export default GuitarsSection
