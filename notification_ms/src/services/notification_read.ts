import { RequestHandler } from 'express';
import { Notification } from '../models';

export const notificationReadHandler: RequestHandler = async (req, res) => {
  const nid = req.params.id;
  try {
    const doc = await Notification.findOne({ notification_id: nid });
    if (doc == null) throw new Error('notification not found');
    doc.is_seen = true;
    await doc.save();
    res.status(200).end();
  } catch (e) {
    res.status(404).json({ msg: 'notification not found.' });
  }
};
