import { createContext, ReactNode, useMemo, useState } from 'react'
import { IUser } from '../types'

type UserContextValue = {
  me: IUser
  // setMe: (_value: IUser) => void
  setMe: React.Dispatch<React.SetStateAction<IUser | any>>
}

const AuthContext = createContext<UserContextValue>({
  me: {} as IUser,
  setMe: () => {},
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [me, setMe] = useState<IUser>({} as IUser)
  const value = useMemo(() => ({ me, setMe }), [me, setMe])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
