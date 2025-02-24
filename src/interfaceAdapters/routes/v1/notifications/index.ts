import express from 'express';
import healthCheck from '../../../../application/healthCheck';

const healthRouter = express();

healthRouter.get('/health-check', healthCheck);

export default healthRouter
