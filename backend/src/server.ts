import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import cors from 'cors';

// Connecting to the database
import '@database/connection';

import routes from './routes';
import errorHandler from '@errors/handler';

const app = express();

app.use(express.json());
app.use(morgan('common'));

// TODO cors whitelist before deploy
app.use(cors());
app.use(routes);
app.use(errorHandler);

app.listen(8393);
