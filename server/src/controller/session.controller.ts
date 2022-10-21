import {
  findAndUpdateUser,
  getGoogleOauthTokens,
  getGoogleUser,
} from '../service/user.service'
import { CookieOptions, Request, Response } from 'express'
import {
  createSession,
  findSessions,
  updateSession,
} from '../service/session.service'
import { signJwt } from '../utils/jwt.utils'
import config from '../config/default'

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

export const getUserSessionsHandler = async (req: Request, res: Response) => {
  const userId = res.locals.user._id

  const sessions = await findSessions({ user: userId, valid: true })

  return res.send(sessions)
}

export const deleteSessionHandler = async (req: Request, res: Response) => {
  const sessionId = res.locals.user.session

  await updateSession({ _id: sessionId }, { valid: false })
  return res.send({
    accessToken: null,
    refreshToken: null,
  })
}

export const googleOauthHandler = async (req: Request, res: Response) => {
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
      { ...user?.toJSON(), session: session._id },
      { expiresIn: config.accessTokenTtl } // 15 minutes
    )
    const refreshToken = signJwt(
      { ...user?.toJSON(), session: session._id },
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
