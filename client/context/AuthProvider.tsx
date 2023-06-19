import { useQuery } from '@tanstack/react-query'
import { createContext, ReactNode, useMemo, useState } from 'react'
import { IUser } from '../types'
import { privateFetcher } from '../utils/fetcher'

type UserContextValue = {
  auth: IUser
  // setMe: (_value: IUser) => void
  setAuth: React.Dispatch<React.SetStateAction<IUser>>
}

const AuthContext = createContext<UserContextValue>({
  auth: {} as IUser,
  setAuth: () => { },
})

type Props = {
  currentUser: IUser
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<IUser>({} as IUser)
  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth])

  const { data } = useQuery(
    ['current_user'],
    () => privateFetcher(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data: Props) => {
        setAuth({
          username: data.currentUser.username,
          avatarUrl: data.currentUser.avatarUrl,
          bio: data.currentUser.bio,
          githubUsername: data.currentUser.githubUsername,
          twitterUsername: data.currentUser.twitterUsername,
          websiteUrl: data.currentUser.websiteUrl,
        })
        const cachedUser = {
          cachedUser: data.currentUser,
        }
        if (!localStorage.getItem('zenn_clone_current_user')) {
          localStorage.setItem(
            'zenn_clone_current_user',
            JSON.stringify(cachedUser)
          )
        } else {
          // if in localStorage already have current_user, then update it
          localStorage.removeItem('zenn_clone_current_user')
          localStorage.setItem(
            'zenn_clone_current_user',
            JSON.stringify(cachedUser)
          )
        }
      },
    }
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
