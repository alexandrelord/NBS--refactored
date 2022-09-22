import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(chalk.red(err.stack));
    res.status(500).json({
        message: err.message
    });
}

export default errorHandler;