import { Prisma, PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import { createPublicEndPointWithZod } from 'src/common/createEndPointWithZod';
import { createHttpResonse } from 'src/common/createHttpResponse';
import { HttpException } from 'src/common/httpException';
import { z } from 'zod';

const userRegisterEndpoint = createPublicEndPointWithZod(
  'USER REGISTER ENDDPOINT',
  z
    .object({
      name: z.string(),
      email: z.string().optional(),
      userName: z.string().optional(),
      password: z.string(),
    })
    .refine((data) => data.email || data.userName, {
      message: 'Either email or userName is required',
      path: ['email', 'userName'],
    }),
  z.object({
    response: z.string(),
  }),
  async (input) => {
    const prisma = new PrismaClient();
    const [existingUserName, existingUserEmail] = await Promise.all([
      prisma.user.findFirst({
        where: {
          userName: input.userName,
        },
      }),
      prisma.user.findFirst({
        where: {
          email: input.email,
        },
      }),
    ]);
    if (existingUserName) {
      throw new HttpException(StatusCodes.FORBIDDEN, `user with this username already exist`);
    }
    if (existingUserEmail) {
      throw new HttpException(StatusCodes.FORBIDDEN, 'user with this email already exist');
    }
    const user = await prisma.user.create({
      data: {
        name: input.name,
        userName: input.userName,
        email: input.email,
        password: input.password,
      },
    });
    return user;
  },
  async (res, output) => {
    createHttpResonse(res, StatusCodes.ACCEPTED, output);
  },
);
