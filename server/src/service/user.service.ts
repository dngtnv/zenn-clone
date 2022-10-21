import axios from 'axios'
import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import qs from 'qs'
import config from '../config/default'
import logging from '../library/logging'
import UserModel, { UserDocument } from '../models/user.model'

export const findUser = (query: FilterQuery<UserDocument>) => {
  return UserModel.findOne(query).lean()
}

interface GoogleTokensResult {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  id_token: string
}
export const getGoogleOauthTokens = async ({
  code,
}: {
  code: string
}): Promise<GoogleTokensResult | undefined> => {
  const url = 'https://oauth2.googleapis.com/token'

  const values = {
    code,
    clientId: config.googleClientId,
    client_secret: config.googleClientSecret,
    redirect_uri: config.googleOauthRedirectUrl,
    grant_type: 'authorization_code',
  }
  try {
    const res = await axios.post<GoogleTokensResult>(
      url,
      qs.stringify(values),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    return res.data
  } catch (error: any) {
    logging.error(`${error}, Failed to fetch Google Oauth Tokens`)
    throw new Error(error.message)
  }
}
interface GoogleUserResult {
  id: string
  email: string
  verified_email: boolean
  name: string
  given_name: string
  family_name: string
  picture: string
  locale: string
}
export const getGoogleUser = async ({
  id_token,
  access_token,
}: {
  id_token: string
  access_token: string
}): Promise<GoogleUserResult | undefined> => {
  try {
    const res = await axios.get<GoogleUserResult>(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    )
    return res.data
  } catch (error: any) {
    logging.error(`${error}, Error fetching Google user`)
    throw new Error(error.message)
  }
}

export const findAndUpdateUser = async (
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions = {}
) => {
  return UserModel.findOneAndUpdate(query, update, options)
}
