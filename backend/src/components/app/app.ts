import express from 'express';
// import apiRules from '../../config/apiRules';
import logger from '../../middleware/logger';
import apiRoutes from './routes/api';

const app = express();

// app.use(apiRules);
app.use(logger);
app.use(express.json());

app.use('/api', apiRoutes);

export default app;
