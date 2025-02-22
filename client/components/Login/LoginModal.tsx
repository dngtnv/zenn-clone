import { Dialog, Transition } from '@headlessui/react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Fragment } from 'react'
import getGoogleOauthUrl from '../../utils/getGoogleUrl'
import SvgClose from '../Icons/close-icon'
import SvgGoogle from '../Icons/google-icon'
import SvgZenn from '../Icons/zenn-logo'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  isOpen: boolean
  closeModal(): void
}

export default function LoginModal(props: Props) {
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[100]"
          onClose={props.closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#242d334d] bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[400px] max-w-[86vw] transform overflow-hidden rounded-2xl bg-white px-[1.7rem] py-[2.3rem] text-center align-middle leading-[1.7] shadow-[0_3px_10px_rgba(0,22,103,0.2)] transition-all">
                  <button
                    onClick={props.closeModal}
                    className="absolute right-4 top-4 text-gray-primary"
                  >
                    <SvgClose size={15} />
                  </button>
                  <SvgZenn className="inline-flex" width={150} height={35} />
                  <Dialog.Title
                    as="h3"
                    className="mt-[1.2rem] text-left text-sm font-normal leading-6 text-secondary"
                  >
                    Zenn is a technical information sharing platform. Share your
                    knowledge and ideas.
                    <Link href="/about" className="text-blue-lighter">
                      Zenn concept
                    </Link>
                  </Dialog.Title>
                  <div className="mt-[1.3rem]">
                    <Link
                      href={getGoogleOauthUrl()}
                      className={`${inter.className} inline-flex items-center justify-center whitespace-nowrap rounded-[0.45rem] border border-gray-bd-lighter bg-[#eff6fb99] px-[1.5em] py-[0.6em] text-[1rem] font-semibold leading-[1.4rem] text-primary shadow-[0_3px_5px_-2px_rgba(33,37,56,0.25)] transition duration-[0.25s] ease-out hover:bg-[#edf2f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2`}
                    >
                      <span className="mr-[0.7em] inline-flex items-center">
                        <SvgGoogle />
                      </span>
                      Login with Google
                    </Link>
                    {/* <button
                      type='button'
                      className='inline-flex items-center leading-[1.4rem] whitespace-nowrap rounded-[0.45rem] justify-center border border-gray-bd-lighter bg-[#eff6fb99] px-[1.5em] py-[0.6em] text-[1rem] font-semibold text-primary shadow-[0_3px_5px_-2px_rgba(33,37,56,0.25)] transition ease-out duration-[0.25s] hover:bg-[#edf2f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2'
                    >
                      <span className='inline-flex items-center mr-[0.7em]'>
                        <SvgGoogle />
                      </span>
                      Login with Google
                    </button> */}
                  </div>
                  <Dialog.Description className="mt-[1.3rem] text-left text-[0.78em] text-secondary tablet:text-sm">
                    Please log in after agreeing to the{' '}
                    <Link
                      href="terms"
                      className="inline-block underline underline-offset-[0.2em] hover:text-blue-lighter hover:no-underline"
                    >
                      Terms of use
                    </Link>
                    <Link
                      href="/privacy"
                      className="inline-block underline underline-offset-[0.2em] hover:text-blue-lighter hover:no-underline"
                    >
                      Privacy policy
                    </Link>
                    .
                  </Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
