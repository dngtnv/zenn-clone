import NextLink from '../../utils/NextLink'
import SvgZenn from '../Icons/zenn-logo'

const Footer: React.FC = () => {
  return (
    <footer className='pt-12 bg-white'>
      <div className='mx-auto px-5 tablet:px-[25px] laptop:px-[40px] max-w-full desktop:max-w-[1200px]'>
        <div className='block tablet:grid tablet:grid-cols-3 tablet:gap-x-5 laptop:grid-cols-4 laptop:gap-x-[3%]'>
          <div className='text-[0.88rem] mb-6 col-span-3 laptop:mb-0 laptop:col-span-1'>
            <NextLink href='/' className='inline-flex'>
              <SvgZenn width={85} height={20} />
            </NextLink>
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
                <NextLink href='#' className='hover:underline'>
                  About Zenn
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Community guidelines
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Usage
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Frequently Asked Questions
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Release Notes
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Development Roadmap
                </NextLink>
              </li>
            </ul>
          </nav>
          <nav className='text-primary text-[0.88rem]'>
            <h4 className='text-[1.15em] font-bold leading[1.5] mt-8 tablet:mt-0 mb-[0.7rem] pb-[0.4rem] tablet:pb-0 border-b border-b-gray-bd-lighter tablet:border-none'>
              Legal
            </h4>
            <ul>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Terms of service
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Privacy policy
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Transaction law
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Classmethod
                </NextLink>
              </li>
            </ul>
          </nav>
          <nav className='text-primary text-[0.88rem]'>
            <h4 className='text-[1.15em] font-bold leading[1.5] mt-8 tablet:mt-0 mb-[0.7rem] pb-[0.4rem] tablet:pb-0 border-b border-b-gray-bd-lighter tablet:border-none'>
              Links
            </h4>
            <ul>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Media kit
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  Twitter
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  GitHub
                </NextLink>
              </li>
              <li className='my-[0.6rem]'>
                <NextLink href='#' className='hover:underline'>
                  RSS
                </NextLink>
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
