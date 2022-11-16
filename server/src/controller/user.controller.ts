import { Request, Response } from 'express'
import { UpdateUserInput } from '../schema/user.schema'
import { findAndUpdateUser, findUser } from '../service/user.service'

export const getCurrentUser = async (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'private, max-age=0, must-validate')
  res.set({ 'x-access-token': req.cookies['accessToken'] })
  return res.send(res.locals.user)
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
