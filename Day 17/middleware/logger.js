const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Create a write stream for file logging
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../logs/access.log'),
  { flags: 'a' }
);

// Custom timestamp format
morgan.token('timestamp', () => new Date().toISOString());

// Format: [timestamp] METHOD URL STATUS - response time ms
const logger = morgan(
  '[:timestamp] :method :url :status - :response-time ms',
  { stream: accessLogStream }
);

module.exports = logger;
