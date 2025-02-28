import express from 'express';
import healthRouter from './user';

const notificationRouter = express.Router();

notificationRouter.use('/notification', healthRouter);

export default notificationRouter;
