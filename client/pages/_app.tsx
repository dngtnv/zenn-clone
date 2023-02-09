import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState } from 'react'
import { NextPage } from 'next'
import { AuthProvider } from '../context/AuthProvider'
import { Inter } from '@next/font/google'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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
        <main className={`${inter.variable} font-sans`}>
          <AuthProvider>
            {getLayout(<Component {...pageProps} />, pageProps.data)}
          </AuthProvider>
        </main>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
