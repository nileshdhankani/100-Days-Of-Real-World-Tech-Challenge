const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: {
    status: 429,
    message: 'Too many requests from this IP. Please try again after 15 minutes.',
  },
});

module.exports = apiLimiter;
