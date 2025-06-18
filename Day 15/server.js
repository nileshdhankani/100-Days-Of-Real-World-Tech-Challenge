const express = require('express');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();
const app = express();

app.use('/api', uploadRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
