import { useState } from 'react'
import Image from 'next/image'
import SvgMan from '../../public/man-working.svg'
import LoginModal from './LoginModal'

const LoginCta: React.FC = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <aside className="mx-0 mb-4 mt-16">
        <div className="mx-auto max-w-[1200px] px-5 tablet:px-[25px] laptop:px-10">
          <aside className="block justify-between rounded-[14px] bg-blue-lightest px-[1.7rem] py-[1.8rem] text-[1.08rem] tablet:flex laptop:px-10 laptop:pb-6 laptop:pt-8 desktop:px-20 desktop:pb-4 desktop:pt-12">
            <div className="w-full text-[0.95rem] tablet:w-[calc(100%_-_220px)] laptop:w-[calc(100%_-_310px)] laptop:text-[1.08rem]">
              <div className="text-[2.4em] font-bold leading-[1.5] text-[#2A2C2E]">
                Join Zenn
              </div>
              <div className="mt-[0.8em] text-secondary">
                Share your findings and ideas
              </div>
              <div className="mt-[1.2em]">
                <button
                  onClick={openModal}
                  className="inline-flex whitespace-nowrap rounded-[0.45em] border border-[#5c93bb26] bg-blue-lighter px-[1.5em] py-[0.6em] text-center text-base font-bold leading-[1.4] text-white shadow-[0_3px_5px_-2px_rgba(33,37,56,0.25)] transition duration-[0.25s] ease-out hover:bg-blue-darker"
                >
                  Get started now
                </button>
              </div>
            </div>
            <div className="mb-0 ml-auto mr-0 mt-6 flex w-[210px] items-end tablet:w-[280px]">
              <Image
                className="h-auto max-h-[203px] w-full max-w-[280px]"
                src={SvgMan}
                priority={true}
                alt=""
              />
            </div>
          </aside>
        </div>
      </aside>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default LoginCta
