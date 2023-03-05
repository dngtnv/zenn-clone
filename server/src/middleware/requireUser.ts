import { NextFunction, Request, Response } from 'express'

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user

  if (!req.headers.cookie && !req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (!user) {
    return res.status(403).json({ message: 'Please login' })
  }
  return next()
}
