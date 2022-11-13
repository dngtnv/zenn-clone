import { createContext, ReactNode, useState } from 'react'

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (_value: boolean) => {},
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
