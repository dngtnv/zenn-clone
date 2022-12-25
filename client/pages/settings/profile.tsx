import Image from 'next/image'
import { ReactElement, useEffect, useRef } from 'react'
import SvgGithub from '../../components/Icons/github-icon'
import SvgLink from '../../components/Icons/link-icon'
import SvgTwitter from '../../components/Icons/twitter-icon'
import Layout from '../../components/Layout'
import { NextPageWithLayout } from '../_app'

const Profile: NextPageWithLayout = () => {
  const styles = {
    textField:
      'text-[15px] w-full block appearance-none rounded-[7px] bg-main-gray border border-gray-bd-lighter focus:outline-0 focus:border focus:border-blue-lighter focus:shadow-[0px_0px_0px_2.5px_#bfdcff]',
    fieldLabel: 'flex items-center text-[0.85rem] font-bold leading-[1.4] mb-2',
  }

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    const textareaRefCurrent = textareaRef.current
    function handleResize() {
      if (textareaRefCurrent) {
        textareaRefCurrent.style.height = 'auto'
        textareaRefCurrent.style.height = `${textareaRefCurrent.scrollHeight}px`
      }
    }
    textareaRefCurrent?.addEventListener('input', handleResize)
    return () => textareaRefCurrent?.removeEventListener('input', handleResize)
  }, [])

  return (
    <main className='py-[2.8rem] border-t border-t-gray-bd-lighter'>
      <div className='px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10 max-w-full desktop:max-w-[960px] mx-auto'>
        <div className='max-w-[720px] mx-auto'>
          <h1 className='font-sans font-bold text-[2rem] leading-[1.5]'>
            Settings
          </h1>
          <div className='relative mt-[1.7rem] after:absolute after:bottom-0 after:left-0 after:min-w-full after:h-[1px] after:bg-gray-bd-lighter'>
            <div className='flex justify-start items-center'>
              <div className='text-blue-lighter border-b-[2.5px] border-blue-lighter pointer-events-none text-base font-semibold mr-6 py-[0.3rem]'>
                Profile
              </div>
            </div>
          </div>
          <section className='my-[2rem] min-h-[200px]'>
            <div className='block tablet:flex tablet:justify-between tablet:items-start'>
              <div className='text-center inline-block text-gray-primary'>
                <span className='w-[90px] h-[90px] mx-auto tablet:w-auto tablet:h-auto tablet:mx-0 flex items-center justify-center'>
                  <Image
                    className='block flex-shrink-0 text-[11px] rounded-[50%] shadow-[0px_2px_4px_rgba(33,37,56,0.25)]'
                    src='/ingodwhotrust.jpg'
                    width={110}
                    height={110}
                    alt='useravatar'
                  />
                </span>
              </div>
              <div className='w-full mt-6 tablet:mt-0 tablet:w-[calc(100%-150px)]'>
                <label htmlFor='user-name' className={styles.fieldLabel}>
                  Display name
                  <span className='text-[#ff6868] ml-[0.2rem]'>*</span>
                </label>
                <input
                  className={`${styles.textField} py-[0.6em] pl-[0.7em] leading-[1.4]`}
                  id='user-name'
                  placeholder='Enter display name'
                  spellCheck='false'
                  type='text'
                  required
                  aria-invalid='false'
                  autoComplete='false'
                />
                <div className='mt-[1.6rem]'>
                  <label htmlFor='user-bio' className={styles.fieldLabel}>
                    Bio
                  </label>
                  <textarea
                    ref={textareaRef}
                    className={`${styles.textField} py-[0.6em] px-[0.7rem] leading-[1.7] overflow-hidden`}
                    placeholder='Enter your self-introduction'
                    id='user-bio'
                    aria-invalid='false'
                    autoComplete='off'
                  ></textarea>
                </div>
                <div className='flex justify-between flex-wrap'>
                  <div className='w-full mobile:w-[47%] mt-[1.7rem]'>
                    <label
                      htmlFor='user-github-username'
                      className={styles.fieldLabel}
                    >
                      <SvgGithub className='mr-[0.3em]' /> GitHub username
                    </label>
                    <input
                      className={`${styles.textField} py-[0.6em] pl-[0.7em] leading-[1.4]`}
                      placeholder='Enter username only'
                      spellCheck='false'
                      type='text'
                      id='user-github-username'
                      aria-invalid='false'
                      autoComplete='off'
                    />
                  </div>
                  <div className='w-full mobile:w-[47%] mt-[1.7rem]'>
                    <label
                      htmlFor='user-twitter-username'
                      className={styles.fieldLabel}
                    >
                      <SvgTwitter className='text-[#3ab4ff] mr-[0.3em]' />{' '}
                      Twitter username
                    </label>
                    <input
                      className={`${styles.textField} py-[0.6em] pl-[0.7em] leading-[1.4]`}
                      placeholder='Enter without @'
                      spellCheck='false'
                      type='text'
                      id='user-twitter-username'
                      aria-invalid='false'
                      autoComplete='off'
                    />
                  </div>
                  <div className='w-full mt-[1.7rem]'>
                    <label
                      htmlFor='user-website-url'
                      className={styles.fieldLabel}
                    >
                      <SvgLink className='mr-[0.3em]' /> Your website
                    </label>
                    <input
                      className={`${styles.textField} py-[0.6em] pl-[0.7em] leading-[1.4]`}
                      placeholder='https://example.com'
                      spellCheck='false'
                      type='text'
                      id='user-website-url'
                      aria-invalid='false'
                      autoComplete='off'
                    />
                  </div>
                </div>
                <p className='text-[0.85rem] mt-[1.1rem] text-secondary'>
                  You will see this information on your profile.
                </p>
                <div className='text-center mt-8'>
                  <button className='inline-flex items-center justify-center leading-[1.4] text-center whitespace-nowrap rounded-[0.45em] border border-[rgba(92,147,187,0.15)] shadow-[0px_3px_5px_-2px_rgba(33,37,56,25%)] bg-blue-lighter font-bold text-base text-white py-[0.6em] px-[1.5em] hover:shadow-[0px_3px_5px_-2px_rgba(33,37,56,0.25)] hover:bg-blue-darker focus:bg-blue-darker focus:shadow-[0_0_0_3px_#bfdcff]'>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
