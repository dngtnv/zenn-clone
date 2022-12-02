import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AuthProvider } from '../context/AuthProvider'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

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
    <main className={`${inter.variable} font-sans`}>
      <AuthProvider>
        {getLayout(<Component {...pageProps} />, pageProps.data)}
      </AuthProvider>
    </main>
  )
}

export default MyApp
