import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login: React.FC = () => {
	const { data: session } = useSession()
	console.log(session)

	if (session) {
		return (
			<div>
				<div>Welcome, {session.user?.name}</div>
				<button onClick={() => signOut()}>logout</button>
			</div>
		)
	} else {
		return (
			<div>
				<button onClick={() => signIn()}>login</button>
			</div>
		)
	}
}

export default Login
