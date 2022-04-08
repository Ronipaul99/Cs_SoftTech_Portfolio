import anyTest, { TestFn } from 'ava';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { Notification } from '../src/models';
import app from '../src/server';

const test = anyTest as TestFn<{ mongod: MongoMemoryServer }>;

test.before(async (t) => {
  t.context = { mongod: await MongoMemoryServer.create() };
  await mongoose.connect(t.context.mongod.getUri());
});

test.serial('GET / should return an empty array', async (t) => {
  const res = await request(app).get('/');
  t.is(res.status, 200);
  t.deepEqual(res.body, []);
});

test.serial('GET / should return a list of of length 2', async (t) => {
  await new Notification({
    notification_id: '1969kjf',
    userId: 'U10095',
    is_seen: false,
    msg_body: 'Hello World 1',
  }).save();
  await new Notification({
    notification_id: '1969kjy',
    userId: 'U10095',
    is_seen: false,
    msg_body: 'Hello World 2',
  }).save();

  const res = await request(app).get('/');
  t.is(res.status, 200);
  t.is(res.body.length, 2);
  t.is(res.body[0].notification_id, '1969kjf');
  t.is(res.body[1].notification_id, '1969kjy');
});

test.serial('POST /:id/mark-as-read', async (t) => {
  const res = await request(app).post('/1969kjf/mark-as-read');
  t.is(res.status, 200);

  const record = await Notification.findOne({ notification_id: '1969kjf' });
  t.is(record?.is_seen, true);
});

test.serial('POST /:id/mark-as-read returns 404', async (t) => {
  const res = await request(app).post('/1969kjx/mark-as-read');
  t.is(res.status, 404);
});

test.serial('DELETE /:id deletes a notification', async (t) => {
  const res = await request(app).delete('/1969kjy');
  t.is(res.status, 200);

  const records = await Notification.find();
  t.is(records.length, 1);
});

test.serial('DELETE /:id returns 404', async (t) => {
  const res = await request(app).delete('/1969kjx');
  t.is(res.status, 404);
});

test.after.always(async (t) => {
  await mongoose.disconnect();
  await t.context.mongod.stop();
});
