const express = require('express');
const dotenv = require('dotenv');
const rateLimiter = require('./middleware/rateLimiter');
const testRoutes = require('./routes/testRoutes');

dotenv.config();
const app = express();

// Apply rate limiter globally (you can also apply it to specific routes only)
app.use(rateLimiter);

// Routes
app.use('/api', testRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
