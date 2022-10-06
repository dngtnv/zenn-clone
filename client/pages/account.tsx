import React from 'react'
import {
	useSession,
	signOut,
	getSession,
	GetSessionParams,
} from 'next-auth/react'

const Account = () => {
	const { data: session } = useSession()

	if (session) {
		return (
			<div>
				<p>Welcome {session.user?.name}</p>
			</div>
		)
	} else {
		return (
			<div>
				<p>Your are not logged in</p>
			</div>
		)
	}
}

export default Account

export async function getServerSideProps(
	context: GetSessionParams | undefined
) {
	const session = await getSession(context)
	if (!session) {
		return {
			redirect: {
				destination: '/login',
			},
		}
	}
	return {
		props: { session },
	}
}
