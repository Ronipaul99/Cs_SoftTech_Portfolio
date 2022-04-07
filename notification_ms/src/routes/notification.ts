import { Router } from 'express';
import {
  notificationDeleteHandler,
  notificationListHandler,
  notificationReadHandler,
} from '../services';

const router = Router();

router.get('/', notificationListHandler);
router.post('/:id/mark-as-read', notificationReadHandler);
router.delete('/:id', notificationDeleteHandler);

export default router;
