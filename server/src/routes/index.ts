import express from 'express'
import user from './user.routes'
import auth from './auth.routes'
import article from './article.routes'
import scrap from './scrap.routes'

const router = express.Router()

// Healthcheck
router.get('/ping', (_, res) => res.status(200).json({ message: 'pong' }))

router.use(user)
router.use(auth)
router.use(article)
router.use(scrap)

export default router
