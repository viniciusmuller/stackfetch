import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';

import { apiLimiter } from './rateLimits';
import { port } from '@config/apiConfig';
import createTypeormConnection from '@database/createTypeormConnection';
import errorHandler from '@errors/handler';
import userRoutes from '@routes/userRoutes';
import techRoutes from '@routes/technologyRoutes';

const middlewares = [
  express.json(),
  morgan('common'),
  cors(),
  apiLimiter,
  userRoutes,
  techRoutes,
  errorHandler
];

createTypeormConnection()
  // Await typeorm to connect
  .then(async (conn) => {
    await conn.runMigrations();
    console.log('Database connected!');
  })
  .catch(console.log)
  // And start our server
  .finally(() => {
    const app = express();
    middlewares.forEach((m) => app.use(m));

    // If our server is running in production, we then serve our react build
    if (process.env.NODE_ENV === 'production') {
      console.log('Serving React App!');
      // Serving files from build directory
      app.use(express.static(path.resolve(__dirname + '/../../build/')));
      app.get('*', (_, response) => {
        response.sendFile(path.resolve(__dirname + '/../../build/index.html'));
      });
    }
    app.listen(port, () => console.log(`Server listening at ${port}!`));
  });
