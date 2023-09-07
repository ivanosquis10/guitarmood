/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getPost } from '@/services'
import { formatDate } from '@/helpers'

export default async function Page({ params }: { params: { slug: string } }) {
  const postFetch = getPost(params.slug)
  const post = await postFetch

  const datePost = post?.created_at != null ? post?.created_at : ''

  return (
    <section className="pt-8 pb-16 md:pt-20">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl">
          <header className="mb-4 lg:mb-6">
            <address className="flex items-center mb-6">
              <div className="inline-flex items-center mr-3 text-sm text-white">
                <img className="mr-4 w-12 h-12 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" width={48} height={48} alt="author image" />
                <div>
                  <p className="text-xl font-bold text-white">Ivanosquis10</p>
                  <p className="capitalize text-base font-light text-gray-500 dark:text-gray-400">artist and guitarist of the JavaScript band</p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white capitalize">{post?.titulo}</h1>
          </header>

          <figure><img src={post?.image} width={300} height={300} alt={`image of the article ${post?.titulo}`} className='w-full h-72 rounded object-cover' />
          </figure>
          <div className='flex items-center justify-between border-b border-zinc-700 py-5'>
            <h4 className='font-medium text-gray-500'>
              Article by ivanosquis10
            </h4>
            <p>{formatDate(datePost)}</p>
          </div>
          <p className='indent-8 leading-relaxed tracking-wide font-light pt-3'>{post?.descripcion}</p>
        </article>
      </div>
    </section>
  )
}
