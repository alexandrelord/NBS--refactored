import {Request, Response, NextFunction} from 'express';
import {allowedOrigins} from '../config/corsOptions';

const credentials = (req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin || '';
    //look into removing empty string from allowedOrigins
    // console.log(req.headers);
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    next();
}

export default credentials;