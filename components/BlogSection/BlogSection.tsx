import { getPosts } from '@/services/posts'
import { Blog, Heading } from '../'

const BlogSection = async () => {
  const posts = await getPosts()
  return (
    <section id='blog'>
      <Heading
        title='our blog'
        subtitle='see our articles about guitars and music'
      />

      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            posts?.map(post => (
              <Blog key={post.id} blog={post} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default BlogSection
