import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import usersPic from '../../public/users.png'
import { updateUser } from '../../services/users'
import { parseJwt } from '../../utils/parseJwt'

const initialState = {
  username: '',
  name: '',
}
type Props = {
  error?: string
}

const AuthInit: NextPage<Props> = ({ error }) => {
  const router = useRouter()
  const [values, setValues] = useState(initialState)
  const [isEmpty, setIsEmpty] = useState(true)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    if (!values.username.trim() || !values.name.trim()) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
    setValues({ ...values, [name]: value })
  }

  async function handleSubmit() {
    const inputValues = {
      username: values.username,
      name: values.name,
    }
    const updatedUser = await updateUser(inputValues)
    const cachedUser = {
      cachedUser: updatedUser,
    }
    // update new info of user to localStorage
    localStorage.setItem('zenn_clone_current_user', JSON.stringify(cachedUser))
    router.push('/')
  }

  if (error) {
    return (
      <div className='my-14 text-center text-[0.95rem] font-bold leading-[1.4] text-secondary'>
        <div className='mx-auto mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[50%] border-[3px] border-[#ff6868] text-[25px] leading-[1.1] text-[#ff6868]'>
          !
        </div>
        Login failed. Please try again
      </div>
    )
  }
  return (
    <div className='mx-auto max-w-[480px] px-5'>
      <section className='mt-[6vh]'>
        <h1 className='text-center font-sans text-[2rem] font-bold tablet:text-[2.2rem] laptop:text-[2.5rem]'>
          Welcome
        </h1>
        <div className='mt-5'>
          <Image
            className='w-full'
            src={usersPic}
            priority={true}
            alt='Welcome!'
          />
        </div>
        <div className='my-5 px-[2px]'>
          <section className='mt-8'>
            <label
              className='mb-2 flex items-center text-[0.85rem] font-bold leading-[1.4]'
              htmlFor='username-field'
            >
              Username
              <span className='ml-[0.4rem] text-[0.78rem] font-normal text-secondary'>
                can not be changed later
              </span>
            </label>
            <div className='flex items-center gap-2'>
              <label
                htmlFor='username-field'
                className='tracking-[0.02em] text-secondary'
              >
                https://zennn.dev/
              </label>
              <input
                className='block w-full flex-1 appearance-none rounded-[7px] border border-gray-bd-lighter bg-main-gray py-[0.6em] pr-0 pl-[0.7em] text-base leading-[1.4] focus:border focus:border-blue-lighter focus:shadow-[0px_0px_0px_2.5px_#bfdcff] focus:outline-0 desktop:text-[15px]'
                type='text'
                placeholder='zenn'
                spellCheck='false'
                id='username-field'
                name='username'
                required
                autoComplete='off'
                onChange={handleChange}
                value={values.username}
              />
            </div>
          </section>
          <section className='mt-8'>
            <label
              className='mb-2 flex items-center text-[0.85rem] font-bold leading-[1.4]'
              htmlFor='name-field'
            >
              Display name
              <span className='ml-[0.4rem] text-[0.78rem] font-normal text-secondary'>
                change any time
              </span>
            </label>
            <input
              className='block w-full appearance-none rounded-[7px] border border-gray-bd-lighter bg-main-gray py-[0.6em] pr-0 pl-[0.7em] text-base leading-[1.4] focus:border focus:border-blue-lighter focus:shadow-[0px_0px_0px_2.5px_#bfdcff] focus:outline-0 desktop:text-[15px]'
              type='text'
              placeholder='Enter display name'
              spellCheck='false'
              id='name-field'
              name='name'
              required
              aria-invalid='false'
              autoComplete='off'
              onChange={handleChange}
              value={values.name}
            />
          </section>
          <div className='my-12 text-center'>
            <button
              onClick={isEmpty ? undefined : handleSubmit}
              className='inline-flex cursor-pointer items-center justify-center whitespace-normal rounded-[0.45em] border border-[#5c93bb26] bg-blue-lighter py-[0.6em] px-[1.5em] text-center text-base font-bold leading-[1.4] text-white shadow-[0px_3px_5px_-2px_rgba(33,37,56,0.25)] disabled:cursor-auto disabled:opacity-[0.7]'
              disabled={isEmpty}
            >
              Next
              <span className='mr-[-0.15em] ml-[0.3em] inline-flex items-center font-normal'>
                <span className='opacity-70'>→</span>
              </span>
            </button>
            <div className='mt-[1.3rem]'>
              <button className='inline-flex cursor-pointer items-center justify-center whitespace-normal rounded-[0.45em] py-2 px-4 text-center text-[0.9rem] leading-[1.4] text-gray-primary hover:bg-main-green hover:text-primary'>
                Suspend registration
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AuthInit

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const refreshToken = req.cookies?.refreshToken as string
  if (!refreshToken) {
    return {
      props: { error: 'Unauthorized' },
    }
  }
  const user = parseJwt(refreshToken)
  // the nullish coalescing operator ?? to return 0 if the string length is null or undefined
  if (user.username?.strim()?.length ?? 0) {
    return {
      redirect: {
        destination: '/',
        statusCode: 301,
      },
    }
  }
  return {
    props: {},
  }
}
