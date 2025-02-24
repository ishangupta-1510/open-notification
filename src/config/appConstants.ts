import { z } from 'zod';
import { parseEnv } from '../common/parseEnv';

export const appConstants = parseEnv(
  z.object({
    PORT: z.string(),
  }),
);
