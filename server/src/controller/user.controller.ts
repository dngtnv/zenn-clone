import { Request, Response } from 'express'
import { UpdateUserInput } from '../schema/user.schema'
import { findAndUpdateUser, findUser } from '../service/user.service'

export const getCurrentUser = async (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'private, max-age=0, must-validate')
  return res.send(res.locals.user)
}

export const updateUserHandler = async (
  req: Request<UpdateUserInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id
  console.log(userId)

  const update = req.body
  const user = await findUser({ _id: userId })
  console.log(user)

  if (!user) {
    return res.sendStatus(404)
  }
  if (String(user._id) !== userId) {
    return res.sendStatus(404)
  }

  const updateUser = await findAndUpdateUser({ userId }, update, {
    new: false,
  })
  return res.send(updateUser)
}
