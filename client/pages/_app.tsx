import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AuthProvider } from '../context/AuthProvider'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement, pageProps?: AppProps) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  /* return getLayout(
    pageProps.data,
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  ) */
  return (
    <AuthProvider>
      {getLayout(<Component {...pageProps} />, pageProps.data)}
    </AuthProvider>
  )
}

export default MyApp
