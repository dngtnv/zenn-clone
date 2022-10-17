import {
  findAndUpdateUser,
  getGoogleOauthTokens,
  getGoogleUser,
  validatePassword,
} from '../service/user.service'
import jwt from 'jsonwebtoken'
import { CookieOptions, Request, Response } from 'express'
import { createSession, findSessions } from '../service/session.service'
import { signJwt } from '../utils/jwt.utils'
import config from '../../config/default'

const accessTokenCookieOptions: CookieOptions = {
  maxAge: 900000, // 15 mins
  httpOnly: true,
  domain: 'localhost',
  path: '/',
  sameSite: 'lax',
  secure: false,
}

const refreshTokenCookieOptions: CookieOptions = {
  ...accessTokenCookieOptions,
  maxAge: 3.154e10, // 1 year
}

export const createSessionHandler = async (req: Request, res: Response) => {
  // Validate the user's password
  const user = await validatePassword(req.body)

  if (!user) {
    return res.status(401).send('Invalid email or password')
  }
  // create a session
  const session = await createSession(user._id, req.get('user-agent') || '')
  // create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.accessTokenTtl } // 15 mins
  )
  //create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.refreshTokenTtl } // 1 year
  )
  // return access & refresh tokens
  res.cookie('accessToken', accessToken, accessTokenCookieOptions)
  res.cookie('refreshToken', refreshToken, refreshTokenCookieOptions)
  return res.send({ accessToken, refreshToken })
}

export const getuserSessionHandler = async (req: Request, res: Response) => {
  const userId = res.locals.user._id
  const sessions = findSessions({ user: userId, valid: true })
  return res.end(sessions)
}

export default async function googleOauthHandler(req: Request, res: Response) {
  // get the code from qs
  const code = req.query.code as string
  try {
    // get the id and access token with the code
    const { id_token, access_token }: any = await getGoogleOauthTokens({ code })
    // get user with tokens
    const googleUser = await getGoogleUser({ id_token, access_token })
    // jwt.decode(id_token)
    console.log({ googleUser })

    if (!googleUser?.verified_email) {
      return res.status(403).send('Google account is not verified')
    }
    // upsert the user
    const user = await findAndUpdateUser(
      {
        email: googleUser.email,
      },
      {
        email: googleUser.email,
        name: googleUser.name,
        picture: googleUser.picture,
      },
      {
        upsert: true,
        new: true,
      }
    )
    // create a session
    const session = await createSession(user?._id, req.get('user-agent') || '')
    // create access & refresh tokens
    const accessToken = signJwt(
      { ...user, session: session._id },
      { expiresIn: config.accessTokenTtl } // 15 minutes
    )
    const refreshToken = signJwt(
      { ...user, session: session._id },
      { expiresIn: config.refreshTokenTtl } // 1 year
    )
    // set cookies
    res.cookie('accessToken', accessToken, accessTokenCookieOptions)

    res.cookie('refreshToken', refreshToken, refreshTokenCookieOptions)
    // redirect back to client
    res.redirect(config.origin)
  } catch (error) {
    console.log(error)
    return res.redirect(`${config.origin}/oauth/error`)
  }
}
