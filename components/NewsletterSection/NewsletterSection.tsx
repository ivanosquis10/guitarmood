import { EnvelopeIcon } from '@heroicons/react/20/solid'


const NewsletterSection = () => {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl text-white">Sign up for our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium ">Email address</label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <EnvelopeIcon width={25} height={25} className='text-gray-500' />
                </div>
                <input className="block p-3 pl-10 w-full text-sm rounded-lg border-2 border-zinc-700 sm:rounded-none sm:rounded-l-lg bg-zinc-800 placeholder-gray-400 text-white" placeholder="Enter your email" type="email" id="email" autoComplete='none' />
              </div>
              <div>
                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border-2 border-zinc-700 cursor-pointer bg-zinc-800 sm:rounded-none sm:rounded-r-lg duration-300 ease-in hover:bg-neutral-900 hover:scale-105">Subscribe</button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.
              <span className="font-medium text-gray-400 hover:underline"> Read our Privacy Policy</span>.</div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection