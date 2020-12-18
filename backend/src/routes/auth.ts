import { Request, Response, NextFunction } from 'express';

import { masterKey } from '@config/apiConfig';

export async function authRequired(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const key = request.body.key;

  if (key != masterKey)
    return response.status(401).json({ message: 'Invalid API key.' });

  next();
}
