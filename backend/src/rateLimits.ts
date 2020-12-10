import rateLimit from 'express-rate-limit';

// Limit users requests to 120 per minute.
export const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  message: 'You are going too fast! Rate limit exceeded.'
});

// A user can register an account every 10 minutes.
export const registerLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  skipFailedRequests: true,
  max: 1,
  message: 'Please wait some minutes before registrating another account.'
});
