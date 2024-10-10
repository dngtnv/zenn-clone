import express from 'express';
import {
  deleteSessionHandler,
  getUserSessionsHandler,
  googleOauthHandler,
  refreshAccessTokenHandler,
} from '../controller/session.controller';
import { requireUser } from '../middleware/requireUser';

const router = express.Router();

// Login with Google oauth
router.get('/api/oauth/google', googleOauthHandler);

router.get('/api/sessions', getUserSessionsHandler);

router.delete('/api/sign_out', requireUser, deleteSessionHandler);

router.get('/api/sessions/refresh', refreshAccessTokenHandler);

export default router;
