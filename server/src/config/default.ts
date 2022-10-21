import dotenv from 'dotenv'

dotenv.config({ path: './config.env' })

const MONGO_USERNAME = process.env.MONGO_USERNAME || ''
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''

export default {
  port: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5000,
  origin: 'http://localhost:3000',
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: process.env.PUBLIC_KEY || '',
  privateKey: process.env.PRIVATE_KEY || '',
  atlasUri: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@zenndev.s8h90nc.mongodb.net/zennclone`,
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  googleOauthRedirectUrl: process.env.GG_OAUTH_REDIRECT_URI || '',
}
