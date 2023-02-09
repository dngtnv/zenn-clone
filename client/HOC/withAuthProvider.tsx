import React from 'react'
import AuthContext from '../context/AuthProvider'

const withAuth = (Component: React.ComponentType) => {
  return function ComponentWithAuth(props: any) {
    return (
      <AuthContext.Consumer>
        {(context) => <Component {...props} value={context} />}
      </AuthContext.Consumer>
    )
  }
}

export { AuthContext, withAuth }
