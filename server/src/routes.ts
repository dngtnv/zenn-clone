import {
  googleOauthHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
} from './controller/session.controller'
import { Express } from 'express'
import { requireUser } from './middleware/requireUser'
import { getCurrentUser } from './controller/user.controller'

function routes(app: Express) {
  // Healthcheck
  app.get('/ping', (req, res, next) =>
    res.status(200).json({ message: 'pong' })
  )

  app.get('/api/oauth/google', googleOauthHandler)

  app.get('/api/user/me', requireUser, getCurrentUser)

  app.get('/api/sessions', requireUser, getUserSessionsHandler)

  app.delete('/api/sessions', requireUser, deleteSessionHandler)
}
export default routes
