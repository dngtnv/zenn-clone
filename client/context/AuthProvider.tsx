import { createContext, ReactNode, useState } from 'react'
import { IUser } from '../types'

type UserContextType = {
  me: IUser
  setMe: (_value: IUser) => void
}

const AuthContext = createContext<UserContextType>({
  me: {} as IUser,
  setMe: () => {},
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [me, setMe] = useState<IUser>({} as IUser)

  return (
    <AuthContext.Provider value={{ me, setMe }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
