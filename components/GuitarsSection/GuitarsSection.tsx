import { Guitar, Heading } from '@/components'
import { getGuitars } from '@/services'
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

const GuitarsSection = async () => {
  const guitarras = await getGuitars(8)
  return (
    <section className='relative max-w-screen-xl mx-auto py-8 md:py-16'>
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


/*
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>



*/