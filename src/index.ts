import express from 'express';
import { appConstants } from './config/appConstants';
import router from './interfaceAdapters/routes';
import { logger } from './common/logger';

const app = express();

app.use('/api', router);

const PORT = appConstants.port || 3000;

app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
});
