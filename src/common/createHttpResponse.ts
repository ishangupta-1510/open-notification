import { ResponseType } from 'src/shared/types';

export const createHttpResonse = (
    res: ResponseType,
    statusCode: number,
    output: unknown,
    message?: string
) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubdomains; preload');
    res.setHeader('Cache-control', 'no-store')
    return res.status(statusCode).json({
        statusCode,
        message: message || 'Successful Response',
        data: output
    })
};
