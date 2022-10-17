import googleOauthHandler from './controller/session.controller'
import { Express } from 'express'

function routes(app: Express) {
  app.get('/api/oauth/google', googleOauthHandler)
}
export default routes
