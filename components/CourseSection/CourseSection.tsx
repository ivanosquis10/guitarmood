import Image from 'next/image'

const CourseSection = () => {
  return (
    <section className='w-full h-[400px] my-8 md:mb-16 relative'>
      <div className='absolute w-full h-full -z-10'>
        <Image
          src='/hero.jpg'
          alt='hero'
          fill
          className='w-full h-full object-cover bg-black opacity-25'
        />
      </div>

      <div className='max-w-screen-xl mx-auto h-full py-8 px-4 flex flex-col items-center justify-center gap-y-5 text-center'>
        <h3 className='text-3xl md:text-5xl font-bold uppercase'>buy our music courses</h3>

        <p className=' text-base md:text-xl tracking-tight font-medium text-white'>
          With 30% discount on your first purchase and a FREE trial lesson
        </p>

        <p className='text-start max-w-4xl tracking-tight font-light text-slate-300'>
          Cras rutrum, risus eget euismod suscipit, magna urna vulputate mi, in suscipit sem libero vitae risus. Praesent nec ornare eros. Nunc dictum facilisis mauris, et faucibus neque pharetra ut. Vivamus posuere magna et erat ultrices, sed luctus eros rhoncus. Praesent nec ornare eros.
        </p>

      </div>
    </section>
  )
}

export default CourseSection
