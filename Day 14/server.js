const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// Static file preview for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/images', imageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
