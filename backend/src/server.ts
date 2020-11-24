import express from 'express';
import morgan from 'morgan';
import 'express-async-errors'

import './database/connection';

import routes from './routes/routes';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(routes);
app.use(errorHandler);

app.listen(3333);
