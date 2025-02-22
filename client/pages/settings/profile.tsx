import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactElement, useContext, useEffect, useState } from 'react'
import SvgError from '../../components/Icons/error-icon'
import SvgGithub from '../../components/Icons/github-icon'
import SvgLink from '../../components/Icons/link-icon'
import SvgTwitter from '../../components/Icons/twitter-icon'
import Layout from '../../components/Layout'
import BioTextArea from '../../components/UI/BioTextArea'
import { AuthContext } from '../../HOC/withAuthProvider'
import { updateUser } from '../../services/users'

const Profile = () => {
  const styles = {
    textField:
      'text-[15px] w-full block appearance-none rounded-[7px] bg-main-gray border border-gray-bd-lighter focus:outline-0 focus:border focus:border-blue-lighter focus:shadow-[0px_0px_0px_2.5px_#bfdcff]',
    fieldLabel: 'flex items-center text-[0.85rem] font-bold leading-[1.4] mb-2',
  }

  const { auth } = useContext(AuthContext)

  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [values, setValues] = useState({
    name: '',
    bio: '',
    githubUsername: '',
    twitterUsername: '',
    websiteUrl: '',
  })

  const router = useRouter()

  function handleChange(event: any) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    if (name === 'name' && value.length > 40) {
      const excessWords = value.length - 40
      setIsError(true)
      setErrorMessage(
        `Please shorten your name by ${
          excessWords > 1
            ? excessWords + ' characters'
            : excessWords + ' character'
        }`
      )
    } else {
      setIsError(false)
      setErrorMessage('')
    }
  }
  async function handleSubmit() {
    const inputValues = {
      name: values.name,
      bio: values.bio,
      githubUsername: values.githubUsername,
      twitterUsername: values.twitterUsername,
      websiteUrl: values.websiteUrl,
    }
    const updatedUser = await updateUser(inputValues)
    const cachedUser = {
      cachedUser: updatedUser,
    }
    // update new info of user to localStorage
    localStorage.setItem('zenn_clone_current_user', JSON.stringify(cachedUser))
  }

  useEffect(() => {
    if (localStorage.getItem('zenn_clone_current_user')) {
      const value: any = localStorage.getItem('zenn_clone_current_user')
      const data = JSON.parse(value)
      // check if user has not finished creating an account
      if (!data.cachedUser.username) {
        router.push('/enter')
      }
      setValues({
        name: data.cachedUser.name,
        bio: data.cachedUser.bio,
        githubUsername: data.cachedUser.githubUsername,
        twitterUsername: data.cachedUser.twitterUsername,
        websiteUrl: data.cachedUser.websiteUrl,
      })
    } else {
      router.push('/enter')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Edit profile | Zenn</title>
      </Head>
      <main className="border-t border-t-gray-bd-lighter py-[2.8rem]">
        <div className="mx-auto max-w-full px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10 desktop:max-w-[960px]">
          <div className="mx-auto max-w-[720px]">
            <h1 className="font-sans text-[2rem] font-bold leading-[1.5]">
              Settings
            </h1>
            <div className="relative mt-[1.7rem] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:min-w-full after:bg-gray-bd-lighter">
              <div className="flex items-center justify-start">
                <div className="pointer-events-none mr-6 border-b-[2.5px] border-blue-lighter py-[0.3rem] text-base font-semibold text-blue-lighter">
                  Profile
                </div>
              </div>
            </div>
            <section className="my-[2rem] min-h-[200px]">
              {!Object.keys(auth).length ? null : (
                <div className="block tablet:flex tablet:items-start tablet:justify-between">
                  <div className="inline-block text-center text-gray-primary">
                    <span className="mx-auto flex h-[90px] w-[90px] items-center justify-center tablet:mx-0 tablet:h-auto tablet:w-auto">
                      <Image
                        className="block flex-shrink-0 rounded-[50%] text-[11px] shadow-[0px_2px_4px_rgba(33,37,56,0.25)]"
                        src={auth.avatarUrl}
                        width={110}
                        height={110}
                        alt={auth.username ? auth.username : 'user avatar'}
                        priority
                      />
                    </span>
                  </div>
                  <div className="mt-6 w-full tablet:mt-0 tablet:w-[calc(100%-150px)]">
                    <label htmlFor="user-name" className={styles.fieldLabel}>
                      Display name
                      <span className="ml-[0.2rem] text-[#ff6868]">*</span>
                    </label>
                    <input
                      className={`${styles.textField} py-[0.6em] pl-[0.7em] leading-[1.4]`}
                      name="name"
                      id="user-name"
                      placeholder="Enter display name"
                      spellCheck="false"
                      type="text"
                      required
                      aria-invalid="false"
                      autoComplete="false"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {isError ? (
                      <div className="mt-[0.6rem] flex items-start text-[13.5px] leading-[1.4] text-[#ff6868]">
                        <SvgError className="mr-[3px] mt-[-2px] shrink-0" />
                        {errorMessage}
                      </div>
                    ) : null}
                    <div className="mt-[1.6rem]">
                      <label htmlFor="user-bio" className={styles.fieldLabel}>
                        Bio
                      </label>
                      <BioTextArea
                        name="bio"
                        className={`${styles.textField} overflow-hidden px-[0.7rem] py-[0.6em] leading-[1.7]`}
                        placeholder="Enter your self-introduction"
                        id="user-bio"
                        aria-invalid="false"
                        autoComplete="off"
                        value={values.bio}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="mt-[1.7rem] w-full mobile:w-[47%]">
                        <label
                          htmlFor="user-github-username"
                          className={styles.fieldLabel}
                        >
                          <SvgGithub className="mr-[0.3em]" /> GitHub username
                        </label>
                        <input
                          name="githubUsername"
                          className={`${styles.textField} py-[0.6em] pl-[0.7em] leading-[1.4]`}
                          placeholder="Enter username only"
                          spellCheck="false"
                          type="text"
                          id="user-github-username"
                          aria-invalid="false"
                          autoComplete="off"
                          value={values.githubUsername}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-[1.7rem] w-full mobile:w-[47%]">
                        <label
                          htmlFor="user-twitter-username"
                          className={styles.fieldLabel}
                        >
                          <SvgTwitter className="mr-[0.3em] text-[#3ab4ff]" />{' '}
                          Twitter username
                        </label>
                        <input
                          name="twitterUsername"
                          className={`${styles.textField} py-[0.6em] pl-[0.7em] leading-[1.4]`}
                          placeholder="Enter without @"
                          spellCheck="false"
                          type="text"
                          id="user-twitter-username"
                          aria-invalid="false"
                          autoComplete="off"
                          value={values.twitterUsername}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-[1.7rem] w-full">
                        <label
                          htmlFor="user-website-url"
                          className={styles.fieldLabel}
                        >
                          <SvgLink className="mr-[0.3em]" /> Your website
                        </label>
                        <input
                          name="websiteUrl"
                          className={`${styles.textField} py-[0.6em] pl-[0.7em] leading-[1.4]`}
                          placeholder="https://example.com"
                          spellCheck="false"
                          type="text"
                          id="user-website-url"
                          aria-invalid="false"
                          autoComplete="off"
                          value={values.websiteUrl}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <p className="mt-[1.1rem] text-[0.85rem] text-secondary">
                      You will see this information on your profile.
                    </p>
                    <div className="mt-8 text-center">
                      <button
                        onClick={() => {
                          !isError && handleSubmit()
                        }}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-[0.45em] border border-[rgba(92,147,187,0.15)] bg-blue-lighter px-[1.5em] py-[0.6em] text-center text-base font-bold leading-[1.4] text-white shadow-[0px_3px_5px_-2px_rgba(33,37,56,25%)] hover:bg-blue-darker hover:shadow-[0px_3px_5px_-2px_rgba(33,37,56,0.25)] focus:bg-blue-darker focus:shadow-[0_0_0_3px_#bfdcff] disabled:cursor-auto disabled:opacity-[0.7]"
                        disabled={isError}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

// const ProfileWithAuth = withAuth(Profile)

// const ProfileWithLayout = (props: any) => {
//   return <ProfileWithAuth {...props} />
// }

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
