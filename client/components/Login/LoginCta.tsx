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
      <aside className='mt-16 mx-0 mb-4'>
        <div className='max-w-[1200px] mx-auto px-5 tablet:px-[25px] laptop:px-10'>
          <aside className='block tablet:flex justify-between py-[1.8rem] px-[1.7rem] laptop:pt-8 laptop:px-10 laptop:pb-6 desktop:pt-12 desktop:px-20 desktop:pb-4 rounded-[14px] bg-blue-lightest text-[1.08rem]'>
            <div className='w-full text-[0.95rem] tablet:w-[calc(100%_-_220px)] laptop:text-[1.08rem] laptop:w-[calc(100%_-_310px)]'>
              <div className='font-bold text-[#2A2C2E] text-[2.4em] leading-[1.5]'>
                Join Zenn
              </div>
              <div className='mt-[0.8em] text-secondary'>
                Share your findings and ideas
              </div>
              <div className='mt-[1.2em]'>
                <button
                  onClick={openModal}
                  className='py-[0.6em] px-[1.5em] inline-flex text-base font-bold bg-blue-lighter text-white border border-[#5c93bb26] rounded-[0.45em] leading-[1.4] text-center whitespace-nowrap shadow-[0_3px_5px_-2px_rgba(33,37,56,0.25)] hover:bg-blue-darker transition ease-out duration-[0.25s]'
                >
                  Get started now
                </button>
              </div>
            </div>
            <div className='w-[210px] mt-6 mr-0 ml-auto mb-0 tablet:w-[280px] flex items-end'>
              <Image
                className='w-full h-auto max-w-[280px] max-h-[203px]'
                src={SvgMan}
                priority={true}
                alt=''
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
