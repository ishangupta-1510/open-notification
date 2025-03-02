import { RequestType, ResponseType } from 'src/shared/types';
import { z } from 'zod';
import { logger } from './logger';

export const createPrivateEndPointWithZod = <TUserInput, TUserOutput>(
  inputSchema: z.Schema<TUserInput>,
  outputSchema: z.Schema<TUserOutput>,
  functionCallback: (input: TUserInput) => any,
  responseCallback: (output: TUserOutput) => Promise<void>,
) => {};

export const createPublicEndPointWithZod =
  <TUserInput, TUserOutput>(
    loggerContext: string,
    inputSchema: z.Schema<TUserInput>,
    outputSchema: z.Schema<TUserOutput>,
    functionCallback: (input: TUserInput) => any,
    responseCallback: (res: ResponseType,output: TUserOutput) => Promise<void>,
  ) =>
  async (req: RequestType, res: ResponseType) => {
    logger.info(loggerContext);
    logger.info('Parsing input started');
    const parsedInput = inputSchema.parse(req);
    logger.info('Parsing input eneded');
    let functionResponse;
    try {
        functionResponse = await functionCallback(parsedInput);
    } catch (err) {
        logger.info(err);
        throw new Error(`Error occurred in ${loggerContext}`);
    }
    await responseCallback(res,outputSchema.parse(functionResponse));
  };
  
