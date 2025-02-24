import express from 'express';
import healthRouter from './notifications';

const notificationRouter = express.Router();

notificationRouter.use('/notification', healthRouter);

export default notificationRouter;
