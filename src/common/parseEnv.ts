import { logger } from './logger';
import { HttpException } from './httpException';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';

dotenv.config()

export const parseEnv = (schema: any) => {
  try {
    logger.info('env validation started');
    const parsedEnv = schema.parse(process.env);
    return parsedEnv;
  } catch (err) {
    logger.error(`env validation failed ${err}`);
    throw new HttpException(StatusCodes.BAD_REQUEST, 'failed env validation');
  }
};
