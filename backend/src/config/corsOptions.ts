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
    optionsSuccessStatus: 200
};

export default corsOptions;

// import { Request, Response, NextFunction } from 'express';

// const apiRules = (req: Request, res: Response, next: NextFunction) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// };

// export default apiRules;
