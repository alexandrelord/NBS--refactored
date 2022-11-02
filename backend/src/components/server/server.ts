import app from '../app/app';
import '../database/connection';
import chalk from 'chalk';

const PORT = 4000;
app.listen(PORT, () => {
    console.log(chalk.yellow(`Server running on port ${PORT}`));
});
