import Image from 'next/image'
import Link from 'next/link'

import type { BlogType } from '@/interfaces'
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

const Blog = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="relative group hover:scale-95 duration-500 ease-out">
      <Image
        className="rounded-lg object-cover aspect-auto w-full"
        src={blog.image}
        alt={`image of the article ${blog.titulo}`}
        width={150}
        height={300}
      />

      <div className="absolute bg-zinc-900/80 h-full top-0 w-full opacity-0 group-hover:opacity-100 rounded-lg flex flex-col justify-between">
        <h4 className="font-bold text-2xl md:text-lg tracking-tighter capitalize bg-zinc-800 rounded-t p-2">{blog.titulo}</h4>
        <Link
          href={`/blog/${blog.url}`}
          passHref
          className='w-full opacity-0 p-2 group-hover:opacity-100 cursor-pointer rounded-b hover:bg-zinc-800 transition-all duration-300 ease-in-out capitalize font-bold flex gap-x-1'>
          see article
          <ChevronDoubleRightIcon width={25} height={25} />
        </Link>
      </div>
    </div>
  )
}

export default Blog
