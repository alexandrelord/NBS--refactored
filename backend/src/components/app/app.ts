import express from 'express';
// import apiRules from '../../config/apiRules';
import cookieParser from 'cookie-parser';
import logger from '../../middleware/logger';
import apiRoutes from './routes/api';

const app = express();

// app.use(apiRules);
app.use(cookieParser());
app.use(logger);
app.use(express.json());

app.use('/api', apiRoutes);

export default app;
