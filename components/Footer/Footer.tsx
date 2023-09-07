import { ChevronDoubleUpIcon } from '@heroicons/react/20/solid'
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from '../Icons/Icons'
const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-zinc-900">
      <div className="mx-auto max-w-screen-xl">
        <hr className="my-6 sm:mx-auto border-zinc-700 lg:my-5" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">© 2022 <span className="hover:underline">GuitarMood</span>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-white" aria-label='go to our facebook'>
              <span className='sr-only'>facebook icon</span>
              <FacebookIcon />
            </a>
            <a href="#" className="text-white" aria-label='go to our instagram'>
              <span className='sr-only'>instagram icon</span>
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/ivanosquis13" target='_blank' rel='noreferrer' className="text-white" aria-label='go to our twitter'>
              <span className='sr-only'>twitter icon</span>
              <TwitterIcon />
            </a>
            <a href="https://github.com/ivanosquis10" target="_blank" className="text-white" rel="noreferrer" aria-label='go to Ivanosquis10 github'>
              <span className='sr-only'>github icon</span>
              <GithubIcon />
            </a>
            <a href="#header" className="text-white" aria-label='button to top'>
              <span className='sr-only'>button to top </span>
              <ChevronDoubleUpIcon width={25} height={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
