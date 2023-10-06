import { Hero, GuitarsSection, CourseSection, BlogSection, NewsletterSection, Footer } from '@/components'

export default function Home() {
  return (
    <>
      <main className='relative'>
        <Hero />
        <GuitarsSection />
        <CourseSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
