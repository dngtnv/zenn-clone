import Link from 'next/link'
import SvgZenn from '../Icons/zenn-logo'

const Footer: React.FC = () => {
  return (
    <footer className='pt-12 bg-white'>
      <div className='mx-auto px-5 tablet:px-[25px] laptop:px-[40px] max-w-full desktop:max-w-[1200px]'>
        <div className='block tablet:grid tablet:grid-cols-3 tablet:gap-x-5 laptop:grid-cols-4 laptop:gap-x-[3%]'>
          <div className='text-[0.88rem] mb-6 col-span-3 laptop:mb-0 laptop:col-span-1'>
            <Link href='/' className='inline-flex'>
              <SvgZenn width={85} height={20} />
            </Link>
            <p className='my-[0.3rem] text-gray-primary text-[13.5px] leading-[1.6] pr-0 laptop:pr-9'>
              Information sharing community for engineers
            </p>
          </div>
          <nav className='text-primary text-[0.88rem]'>
            <h4 className='text-[1.15em] font-bold leading[1.5] mt-8 tablet:mt-0 mb-[0.7rem] pb-[0.4rem] tablet:pb-0 border-b border-b-gray-bd-lighter tablet:border-none'>
              About
            </h4>
            <ul>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  About Zenn
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Community guidelines
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Usage
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Frequently Asked Questions
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Release Notes
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Development Roadmap
                </Link>
              </li>
            </ul>
          </nav>
          <nav className='text-primary text-[0.88rem]'>
            <h4 className='text-[1.15em] font-bold leading[1.5] mt-8 tablet:mt-0 mb-[0.7rem] pb-[0.4rem] tablet:pb-0 border-b border-b-gray-bd-lighter tablet:border-none'>
              Legal
            </h4>
            <ul>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Terms of service
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Privacy policy
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Transaction law
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Classmethod
                </Link>
              </li>
            </ul>
          </nav>
          <nav className='text-primary text-[0.88rem]'>
            <h4 className='text-[1.15em] font-bold leading[1.5] mt-8 tablet:mt-0 mb-[0.7rem] pb-[0.4rem] tablet:pb-0 border-b border-b-gray-bd-lighter tablet:border-none'>
              Links
            </h4>
            <ul>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Media kit
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  Twitter
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  GitHub
                </Link>
              </li>
              <li className='my-[0.6rem]'>
                <Link href='#' className='hover:underline'>
                  RSS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mt-8 pt-[0.9rem] pb-[0.8rem] border-t border-t-gray-bd-lighter text-gray-primary text-center'>
          classmethod
        </div>
      </div>
    </footer>
  )
}
export default Footer
