import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import SvgToiletPaper from '../Icons/toiletpaper-icon'
import SvgDocument from '../Icons/document-icon'
import SvgBook from '../Icons/book-icon'
import SvgDeploy from '../Icons/deploy-icon'
import SvgFavorite from '../Icons/favorite-icon'
import SvgBookopen from '../Icons/bookopen-icon'
import SvgYen from '../Icons/jpyen-icon'
import SvgSetting from '../Icons/setting-icon'
import SvgLogout from '../Icons/logout-icon'
import Link from 'next/link'
import useLogout from '../../hooks/useLogout'

interface Props {
  children: React.ReactNode
}

const UserMenu: React.FC<Props> = ({ children }) => {
  const logout = useLogout()

  const signOut = async () => {
    await logout()
    window.location.assign('/')
  }

  return (
    <Menu as='div' className='relative h-10 ml-[20px]'>
      <Menu.Button>{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute z-[51] overflow-hidden right-0 w-[236px] text-[13.5px] origin-top-right divide-y divide-gray-100 rounded-[7px] bg-white shadow-[0_3px_12px_-1px_rgba(4,37,63,25%)] focus:outline-none'>
          <Menu.Item>
            {({ active }) => (
              <Link
                href='#'
                className={`${
                  active && 'bg-main-gray'
                } leading-[1.5] group flex flex-wrap w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
              >
                <div className='font-bold text-primary w-full'>dngtnv</div>
                <div className='text-[0.9em] text-gray-primary w-full'>
                  @dngtnv
                </div>
              </Link>
            )}
          </Menu.Item>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] text-primary group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgToiletPaper
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Scraps management
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] text-primary group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgDocument
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Articles management
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] text-primary group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgBook
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Books management
                </Link>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] text-primary group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgDeploy
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Deploy from GitHub
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] text-primary group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgFavorite
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Liked posts
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] text-primary group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgBookopen
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Recent reading book
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] text-primary group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgYen
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Earning Dashboard
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] text-primary group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgSetting
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Account settings
                </Link>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={signOut}
                  className={`${
                    active && 'bg-main-gray'
                  } leading-[1.5] group text-primary flex w-full items-center px-[0.9em] py-[0.7em] text-[14px]`}
                >
                  <SvgLogout
                    className='text-gray-primary mr-[0.6em] h-5 w-5'
                    aria-hidden='true'
                  />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserMenu
