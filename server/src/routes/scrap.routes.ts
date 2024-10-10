import express from 'express';

const router = express.Router();

router.get('/api/scraps', (req, res) => {
  res.status(200).json({ scraps: [] });
});

export default router;
