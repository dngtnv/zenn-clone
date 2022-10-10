import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			profile(profile) {
				return {
					id,
					name,
					email,
					picture,
				}
			},
		}),
	],
	page: {
		signIn: ({ user, account, profile, isNewUser }) => {
			console.log(`isNewUser: ${JSON.stringify(isNewUser)}`)
		},
	},
	debug: false,
})
