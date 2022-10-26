import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../utils/fetcher'
import AddnewMenu from '../DropdownMenu/AddnewMenu'
import UserMenu from '../DropdownMenu/UserMenu'
import SvgBell from '../Icons/bell-icon'
import SvgSearch from '../Icons/search-icon'
import SvgZenn from '../Icons/zenn-logo'
import LoginModal from '../Login/LoginModal'

interface User {
  _id: string
  email: string
  name: string
  picture: string
  createdAt: Date
  updatedAt: Date
  __v: number
  session: string
  iat: number
  exp: number
}

const Header: React.FC<{ fallbackData?: User }> = ({ fallbackData }) => {
  const { data } = useSWR<User | null>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/user/me`,
    fetcher,
    { fallbackData }
  )

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  if (!data) {
    return (
      <header>
        <div className='mx-auto px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10 max-w-[1200px]'>
          <div className='flex justify-between items-center'>
            <Link href='/' className='flex items-center h-[62px]'>
              <SvgZenn height={22} />
            </Link>
            <div className='transition-all duration-[0.3s] ease-in'>
              <div className='flex items-center'>
                <Link
                  href='/search'
                  className='text-secondary hover:text-primary transition duration-[250] ease-out'
                >
                  <SvgSearch size={23} />
                </Link>
                <div className='flex items-center content-center ml-4'>
                  <div className='text-secondary w-[23px] h-[23px]'>
                    <button className='text-secondary hover:text-primary transition duration-[250ms] ease-out'>
                      <SvgBell size={23} />
                    </button>
                  </div>
                  <UserMenu>
                    <Image
                      className='object-cover border border-transparent rounded-[50%]'
                      src={data ? data.picture : '/ingodwhotrust.jpg'}
                      width={40}
                      height={40}
                      alt=''
                    />
                  </UserMenu>
                  <div className='hidden tablet:flex items-center'>
                    <AddnewMenu className='inline-flex w-[92px] h-9 items-center justify-center text-white font-semibold text-[14.5px] bg-blue-lighter ml-[22px] rounded-[7px] hover:bg-blue-darker transition duration-[250ms] ease-out'>
                      Add new
                    </AddnewMenu>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header>
        <div className='mx-auto px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10 max-w-[1200px]'>
          <div className='flex justify-between items-center'>
            <Link href='/' className='flex items-center h-[62px]'>
              <SvgZenn height={22} />
            </Link>
            <div className='transition-all duration-[0.3s] ease-in'>
              <div className='flex items-center'>
                <Link
                  href='/search'
                  className='text-secondary hover:text-primary transition duration-[250] ease-out'
                >
                  <SvgSearch size={23} />
                </Link>
                <button
                  type='button'
                  onClick={openModal}
                  className='inline-flex w-[80px] h-9 items-center justify-center text-white font-semibold text-[15px] bg-blue-lighter ml-[22px] rounded-[7px] hover:bg-blue-darker transition duration-[250ms] ease-out'
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/user/me`,
    context.req.headers
  )
  return { props: { fallbackData: data } }
}

export default Header
