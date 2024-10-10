import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode, useState } from 'react'
import { AuthProvider } from '../context/AuthProvider'
import '../styles/globals.css'

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
  const [queryClient] = useState(() => new QueryClient())
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  /* return getLayout(
    pageProps.data,
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  ) */
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className={`${inter.variable} font-sans`}>
          <AuthProvider>
            {getLayout(<Component {...pageProps} />, pageProps.data)}
          </AuthProvider>
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
