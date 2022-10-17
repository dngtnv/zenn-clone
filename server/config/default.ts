import dotenv from 'dotenv'

dotenv.config({ path: './config.env' })

export default {
  port: 5000,
  origin: 'http://localhost:3000',
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  atlasUri: process.env.ATLAS_URI,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleOauthRedirectUrl: process.env.GG_OAUTH_REDIRECT_URI,
}
