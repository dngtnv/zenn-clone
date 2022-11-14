import { Request, Response, NextFunction } from 'express'

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user
  const accessToken = req.cookies.accessToken
  const refreshToken = req.cookies.refreshToken
  if (!accessToken && !refreshToken) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (!user) {
    return res.status(403).json({ message: 'Please login' })
  }
  return next()
}
