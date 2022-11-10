import express from 'express'
import {
  getCurrentUser,
  updateUserHandler,
} from '../controller/user.controller'
import { requireUser } from '../middleware/requireUser'
import validateResource from '../middleware/validateResource'
import { updateUserSchema } from '../schema/user.schema'

const router = express.Router()

router.get('/api/me', requireUser, getCurrentUser)

router.put(
  '/api/users/:userId',
  [requireUser, validateResource(updateUserSchema)],
  updateUserHandler
)

export default router