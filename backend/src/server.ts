import express from 'express';
import 'express-async-errors';

import '@database/connection';

import routes from './routes';
import morgan from 'morgan';
import errorHandler from '@errors/handler';

const app = express();

app.use(express.json());
app.use(morgan('common'));

app.use(routes);
app.use(errorHandler);

app.listen(8393);
