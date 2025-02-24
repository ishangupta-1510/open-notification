import express from 'express';
import notificationRouter from './v1';

const router = express.Router();

router.use('/v1', notificationRouter);

export default router;
