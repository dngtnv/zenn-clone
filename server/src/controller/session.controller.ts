import { CookieOptions, Request, Response } from 'express';
import { get } from 'lodash';
import config from '../config/default';
import logger from '../library/logger';
import {
  createSession,
  findSessions,
  reIssueAccessToken,
  updateSession,
} from '../service/session.service';
import {
  findAndUpdateUser,
  getGoogleOauthTokens,
  getGoogleUser,
} from '../service/user.service';
import { signJwt, verifyJwt } from '../utils/jwt.utils';

const accessTokenCookieOptions: CookieOptions = {
  maxAge: 900000, // 15 mins
  httpOnly: true,
  domain: 'localhost',
  path: '/',
  sameSite: 'lax',
  secure: false,
};

const refreshTokenCookieOptions: CookieOptions = {
  ...accessTokenCookieOptions,
  maxAge: 365 * 24 * 60 * 60, // 1 year
};

export const getUserSessionsHandler = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user._id;
    const sessions = await findSessions({ user: userId, valid: true });
    return res.send(sessions);
  } catch (error) {
    logger.error(`Can not get user session - ${error}`);
    return res.status(401).send('Unauthorized');
  }
};

export const deleteSessionHandler = async (req: Request, res: Response) => {
  const sessionId = res.locals.user.session;

  await updateSession({ _id: sessionId }, { valid: false });
  res.cookie('accessToken', '', {
    maxAge: 0,
    httpOnly: true,
  });
  res.cookie('refreshToken', '', {
    maxAge: 0,
    httpOnly: true,
  });
  // return res.redirect(204, config.origin)
  // Error (cause when using redirect & status function)
  return res.status(204).json({
    accessToken: null,
    refreshToken: null,
  });
};

export const googleOauthHandler = async (req: Request, res: Response) => {
  // get the code from qs
  const code = req.query.code as string;
  try {
    // get the id and access token with the code
    const { id_token, access_token }: any = await getGoogleOauthTokens({
      code,
    });
    // get user with tokens
    const googleUser = await getGoogleUser({ id_token, access_token });
    // jwt.decode(id_token)
    logger.info({ googleUser });

    if (!googleUser?.verified_email) {
      return res.status(403).send('Google account is not verified');
    }
    // upsert the user
    const user = await findAndUpdateUser(
      {
        email: googleUser.email,
      },
      {
        email: googleUser.email,
        avatarUrl: googleUser.picture,
      },
      {
        upsert: true,
        new: true,
      }
    );
    // create a session
    const session = await createSession(user?._id, req.get('user-agent') || '');
    // create access & refresh tokens
    const accessToken = signJwt(
      { ...user?.toJSON(), session: session._id },
      { expiresIn: config.accessTokenTtl } // 15 mins
    );
    const refreshToken = signJwt(
      { ...user?.toJSON(), session: session._id },
      { expiresIn: config.refreshTokenTtl } // 1 year
    );

    // set cookies
    res.cookie('accessToken', accessToken, accessTokenCookieOptions);
    res.cookie('refreshToken', refreshToken, refreshTokenCookieOptions);

    // redirect back to client
    if (!user?.username) {
      return res.redirect(config.init);
    }
    return res.redirect(config.origin);
  } catch (error) {
    console.log(error);
    return res.redirect(`${config.origin}/oauth/error`);
  }
};

export const refreshAccessTokenHandler = async (
  req: Request,
  res: Response
) => {
  const refreshToken =
    get(req, 'cookies.refreshToken') || get(req, 'headers.x-refresh');

  if (!refreshToken) return false;

  const decoded = verifyJwt(refreshToken);
  console.log({ decoded });

  if (!decoded) {
    return res.status(401).json({ message: 'Could not refresh access token' });
  }
  if (decoded.valid === false) {
    return res
      .status(401)
      .json({ message: 'Invalid refresh token, please login again!' });
  }

  const newAccessToken = await reIssueAccessToken({ refreshToken });
  if (newAccessToken) {
    res.cookie('accessToken', newAccessToken, {
      ...accessTokenCookieOptions,
      sameSite: 'strict',
    });
    return res.json({ newAccessToken });
  }
};
