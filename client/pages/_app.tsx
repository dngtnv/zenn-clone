import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout, session: any) {
	// Use the layout defined at the page level, if availeable
	const getLayout = Component.getLayout ?? ((page) => page)
	return getLayout(
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default MyApp
