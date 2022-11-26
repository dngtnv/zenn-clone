import { Request, Response } from 'express'
import logger from '../library/logger'
import { UpdateUserInput } from '../schema/user.schema'
import { findAndUpdateUser, findUser } from '../service/user.service'

export const getCurrentUser = async (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'private, max-age=0, must-validate')
  res.set({ 'x-access-token': req.cookies['accessToken'] })
  return res.send(res.locals.user)
}

export const checkUserExist = async (req: Request, res: Response) => {
  try {
    const username = req.params.username
    const user = await findUser({ username: username })
    if (!user) {
      return res.status(403).json({ message: 'User does not exist' })
    }
    return res.status(200).json({ user })
  } catch (err) {
    logger.error(err)
  }
}

export const updateUserHandler = async (
  req: Request<UpdateUserInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id

  const update = req.body
  const user = await findUser({ _id: userId })

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' })
  }
  if (String(user._id) !== userId) {
    return res.status(404).json({ message: 'Not Found' })
  }

  const updateUser = await findAndUpdateUser({ userId }, update, {
    new: true,
  })
  return res.json({ updateUser })
}
