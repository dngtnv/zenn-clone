import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { AuthContext } from '../../HOC/withAuthProvider'
import AddnewMenu from '../DropdownMenu/AddnewMenu'
import NotifMenu from '../DropdownMenu/NotifMenu'
import UserMenu from '../DropdownMenu/UserMenu'
import SvgBell from '../Icons/bell-icon'
import SvgSearch from '../Icons/search-icon'
import SvgZenn from '../Icons/zenn-logo'
import LoginModal from '../Login/LoginModal'

const Header = () => {
  const { auth } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <header className='bg-white text-primary'>
      <div className='mx-auto max-w-[1200px] px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex h-[62px] items-center'>
            <SvgZenn height={22} />
          </Link>
          <div className='transition-all duration-[0.3s] ease-in'>
            {Object.keys(auth).length != 0 && auth.username ? (
              <div className='flex items-center'>
                <Link
                  href='/search'
                  aria-label='go to search page'
                  className='text-secondary transition duration-[250] ease-out hover:text-primary'
                >
                  <SvgSearch size={23} />
                </Link>
                <div className='ml-4 flex content-center items-center'>
                  <div className='h-[23px] w-[23px] text-secondary'>
                    <NotifMenu className='text-secondary transition duration-[250ms] ease-out hover:text-primary'>
                      <SvgBell size={23} />
                    </NotifMenu>
                  </div>
                  <UserMenu>
                    <Image
                      className='rounded-[50%] border border-gray-bd-lighter object-cover'
                      src={
                        Object.keys(auth).length != 0
                          ? auth.avatarUrl
                          : '/ingodwhotrust.jpg'
                      }
                      width={40}
                      height={40}
                      alt=''
                    />
                  </UserMenu>
                  <div className='hidden items-center tablet:flex'>
                    <AddnewMenu className='ml-[22px] inline-flex h-9 w-[92px] items-center justify-center rounded-[7px] bg-blue-lighter text-[14.5px] font-semibold text-white transition duration-[250ms] ease-out hover:bg-blue-darker'>
                      Add new
                    </AddnewMenu>
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex items-center'>
                <Link
                  href='/search'
                  className='text-secondary transition duration-[250] ease-out hover:text-primary'
                >
                  <SvgSearch size={23} />
                </Link>
                <button
                  type='button'
                  onClick={openModal}
                  className='ml-[22px] inline-flex h-9 w-[80px] items-center justify-center rounded-[7px] bg-blue-lighter text-[15px] font-semibold text-white transition duration-[250ms] ease-out hover:bg-blue-darker'
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

export default Header
