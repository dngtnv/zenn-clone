import jwt from 'jsonwebtoken'
import config from '../../config/default'

const privateKey = config.privateKey as string
const publicKey = config.publicKey as string

export function signJwt(payload: any, options?: jwt.SignOptions | undefined) {
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: 'RS256',
  })
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey)
    return {
      valid: true,
      expired: false,
      decoded,
    }
  } catch (e: any) {
    console.error(e)
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    }
  }
}
