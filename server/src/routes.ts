import {
  googleOauthHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
} from './controller/session.controller'
import { Express } from 'express'
import { requireUser } from './middleware/requireUser'
import { getCurrentUser, updateUserHandler } from './controller/user.controller'
import validateResource from './middleware/validateResource'
import { updateUserSchema } from './schema/user.schema'

function routes(app: Express) {
  // Healthcheck
  app.get('/ping', (req, res, next) =>
    res.status(200).json({ message: 'pong' })
  )
  // Login with Google oauth
  app.get('/api/oauth/google', googleOauthHandler)

  app.get('/api/me', requireUser, getCurrentUser)

  app.get('/api/sessions', requireUser, getUserSessionsHandler)

  app.delete('/api/sign_out', requireUser, deleteSessionHandler)

  app.put(
    '/api/users/:userId',
    [requireUser, validateResource(updateUserSchema)],
    updateUserHandler
  )
}
export default routes
