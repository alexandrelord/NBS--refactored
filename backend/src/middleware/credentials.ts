import {Request, Response, NextFunction} from 'express';
import {allowedOrigins} from '../config/corsOptions';

const credentials = (req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin || '';
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        // if (req.method === 'OPTIONS') {
        //     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        //     return res.status(200).json({});
        // }
    }
    next();
}

export default credentials;