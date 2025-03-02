import express from 'express';
import healthCheck from '../../../../services/healthCheck';

const healthRouter = express();

healthRouter.get('/health-check', healthCheck);

export default healthRouter
