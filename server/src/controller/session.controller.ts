import {
  findAndUpdateUser,
  getGoogleOauthTokens,
  getGoogleUser,
} from '../service/user.service'
import { CookieOptions, Request, Response } from 'express'
import {
  createSession,
  findSessions,
  reIssueAccessToken,
  updateSession,
} from '../service/session.service'
import { signJwt, verifyJwt } from '../utils/jwt.utils'
import config from '../config/default'
import { get } from 'lodash'

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
  res.cookie('accessToken', '', {
    maxAge: 0,
    httpOnly: true,
  })
  res.cookie('refreshToken', '', {
    maxAge: 0,
    httpOnly: true,
  })
  res.redirect(204, config.origin)
  // Error (cause when using redirect & status function)
  /* return res.status(204).json({
    accessToken: null,
    refreshToken: null,
  }) */
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
        username: '',
        avatarUrl: googleUser.picture,
        bio: '',
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

export const refreshAccessTokenHandler = async (
  req: Request,
  res: Response
) => {
  const refreshToken =
    get(req, 'cookies.refreshToken') || get(req, 'headers.x-refresh')

  if (!refreshToken) return false

  const decoded = verifyJwt(refreshToken)

  if (!decoded) {
    return res.status(401).send('Could not refresh access token')
  }

  const newAccessToken = await reIssueAccessToken({ refreshToken })
  if (newAccessToken) {
    res.setHeader('x-access-token', newAccessToken)

    res.cookie('accessToken', newAccessToken, {
      maxAge: 900000, // 15 mins
      httpOnly: true,
      domain: 'localhost',
      path: '/',
      sameSite: 'strict',
      secure: false,
    })
    return res.send({ newAccessToken })
  }
}
