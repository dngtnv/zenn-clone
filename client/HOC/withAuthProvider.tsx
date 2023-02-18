import React, { ReactElement } from 'react'
import AuthContext from '../context/AuthProvider'
import { IUser } from '../types'

interface AuthContextProps {
  user: IUser
}

interface InjectedProps {
  value: AuthContextProps
}

const withAuth = <P extends InjectedProps>(
  Component: React.ComponentType<P>
) => {
  type Props = Omit<P, keyof InjectedProps>
  return function ComponentWithAuth(props: Props): ReactElement {
    return (
      <AuthContext.Consumer>
        {(context) => <Component {...(props as P)} value={context} />}
      </AuthContext.Consumer>
    )
  }
}

export { AuthContext, withAuth }
