import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, _, response, __) => {
  // Request didn't validate
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};
    error.inner.forEach((err) => (errors[err.path] = err.errors));

    return response.status(422).json({
      message: 'Validation failed.',
      errors
    });
  }

  // Bad formatted user JSON request
  if (error instanceof SyntaxError && error.message.match(/JSON/)) {
    return response.status(400).json({
      message: 'Invalid request.',
      error: error.message
    });
  }
  // If it's an unknown error, logs it and return internal server error.
  console.log(error);
  return response.status(500).json({ message: 'Internal server error.' });
};

export default errorHandler;
