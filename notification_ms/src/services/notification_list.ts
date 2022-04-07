import { RequestHandler } from 'express';
import { Notification } from '../models';

export const notificationListHandler: RequestHandler = async (req, res) => {
  const notifications = await Notification.find();
  res.json(notifications);
};
