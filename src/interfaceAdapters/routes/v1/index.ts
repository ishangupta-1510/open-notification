import express from 'express';
import healthRouter from './auth';

const notificationRouter = express.Router();

notificationRouter.use('/notification', healthRouter);

export default notificationRouter;
