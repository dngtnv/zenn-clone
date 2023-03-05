import express, { NextFunction, Request, Response } from 'express'
import article from './article.routes'
import auth from './auth.routes'
import scrap from './scrap.routes'
import user from './user.routes'

const router = express.Router()

function setCache(req: Request, res: Response, next: NextFunction) {
  if (req.method === 'GET') {
    res.set('Cache-Control', 'private, max-age=0, must-validate')
  } else {
    res.set('Cache-Control', 'no-store')
  }
  next()
}

// Healthcheck
router.get('/ping', (_, res) => res.status(200).json({ message: 'pong' }))

router.use(user)
router.use(auth)
router.use(article)
router.use(scrap)

router.use(setCache)

export default router
