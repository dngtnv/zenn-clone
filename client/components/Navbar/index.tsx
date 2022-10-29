import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className='bg-white border-b border-b-gray-border-lighter z-10 sticky top-0'>
      <div className='mx-auto px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10  max-w-[1200px]'>
        <div className='flex justify-start items-center'>
          <Link
            href='/'
            className={`${router.pathname == '/'
                ? 'text-primary border-b-[2.5px] border-b-primary'
                : 'text-secondary border-b-[2.5px] border-b-transparent'
              } 'text-base font-semibold mr-[27.2px] py-2`}
          >
            Trending
          </Link>
          <Link
            href='/following'
            className={`${router.pathname == '/following'
                ? 'text-primary border-b-[2.5px] border-b-primary'
                : 'text-secondary border-b-[2.5px] border-b-transparent'
              } 'text-base font-semibold mr-[27.2px] py-2`}
          >
            Following
          </Link>
          <Link
            href='/explore'
            className={`${router.pathname == '/explore'
                ? 'text-primary border-b-[2.5px] border-b-primary'
                : 'text-secondary border-b-[2.5px] border-b-transparent'
              } 'text-base font-semibold mr-[27.2px] py-2`}
          >
            Explore
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
