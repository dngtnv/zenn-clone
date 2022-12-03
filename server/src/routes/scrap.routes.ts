import express from 'express'

const router = express.Router()

router.get('/api/scraps', (req, res) => {
  res.sendStatus(204)
})

export default router
