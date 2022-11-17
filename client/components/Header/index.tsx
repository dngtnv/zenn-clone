import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import AddnewMenu from '../DropdownMenu/AddnewMenu'
import NotifMenu from '../DropdownMenu/NotifMenu'
import UserMenu from '../DropdownMenu/UserMenu'
import SvgBell from '../Icons/bell-icon'
import SvgSearch from '../Icons/search-icon'
import SvgZenn from '../Icons/zenn-logo'
import LoginModal from '../Login/LoginModal'
import useSWR from 'swr'
import { privateFetcher } from '../../utils/fetcher'
import { IUser } from '../../types/index'

const Header: NextPage<{ fallbackData: IUser }> = ({ fallbackData }) => {
  const { data } = useSWR<IUser | null>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    privateFetcher,
    {
      fallbackData,
      revalidateOnFocus: false,
    }
  )
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <header>
      <div className='mx-auto px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10 max-w-[1200px]'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='flex items-center h-[62px]'>
            <SvgZenn height={22} />
          </Link>
          <div className='transition-all duration-[0.3s] ease-in'>
            {data ? (
              <div className='flex items-center'>
                <Link
                  href='/search'
                  className='text-secondary hover:text-primary transition duration-[250] ease-out'
                >
                  <SvgSearch size={23} />
                </Link>
                <div className='flex items-center content-center ml-4'>
                  <div className='text-secondary w-[23px] h-[23px]'>
                    <NotifMenu className='text-secondary hover:text-primary transition duration-[250ms] ease-out'>
                      <SvgBell size={23} />
                    </NotifMenu>
                  </div>
                  <UserMenu>
                    <Image
                      className='object-cover border border-gray-bd-lighter rounded-[50%]'
                      src={data ? data.avatarUrl : '/ingodwhotrust.jpg'}
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
            ) : (
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
                <LoginModal isOpen={isOpen} closeModal={closeModal} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await privateFetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`
  )
  return { props: { fallbackData: data } }
}

export default Header
