import express from 'express';
import {
  checkUserExist,
  deleteCurrentUser,
  getCurrentUser,
  updateCurrentUser,
  updateUserHandler,
} from '../controller/user.controller';
import { requireUser } from '../middleware/requireUser';
import validateResource from '../middleware/validateResource';
import {
  updateCurrentUserSchema,
  updateUserSchema,
} from '../schema/user.schema';

const router = express.Router();

router.get('/api/me', requireUser, getCurrentUser);

router.put(
  '/api/me',
  [requireUser, validateResource(updateCurrentUserSchema)],
  updateCurrentUser
);
router.delete('/api/me/cancel', requireUser, deleteCurrentUser);

router.put(
  '/api/users/:userId',
  [requireUser, validateResource(updateUserSchema)],
  updateUserHandler
);

router.get('/api/users/:username', checkUserExist);

router.get('/api/users/:username/comments', (_, res) => {
  res.status(200).send({ comments: [] });
});

export default router;
