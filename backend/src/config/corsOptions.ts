import type { CorsOptions } from 'cors';

export const allowedOrigins = ['http://localhost:3000'];

const corsOptions: CorsOptions = {
    origin: (requestOrigin, cb) => {
        const origin = requestOrigin || '';
        if (allowedOrigins.indexOf(origin) !== -1) {
            cb(null, true);
        } else {
            cb(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // Allow cookies to be sent
};

export default corsOptions;
