import mongoose from 'mongoose';
import { config } from '../../config/config';
import chalk from 'chalk';

(async () => {
    try {
        await mongoose.connect(config.db.url, {
            retryWrites: true,
            w: 'majority',
        });
        console.log(chalk('Connected to database'));
    } catch (error) {
        console.error('Error connecting to database: ', error);
    }
})();
