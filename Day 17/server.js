const express = require('express');
const logger = require('./middleware/logger');
const pingRoutes = require('./routes/pingRoutes');
const fs = require('fs');
const path = require('path');

// Ensure logs directory exists
if (!fs.existsSync(path.join(__dirname, 'logs'))) {
  fs.mkdirSync(path.join(__dirname, 'logs'));
}

const app = express();

// Middleware to log requests
app.use(logger);

// Routes
app.use('/api', pingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
