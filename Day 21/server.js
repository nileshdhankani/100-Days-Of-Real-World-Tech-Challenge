const express = require('express');
const geoRoutes = require('./routes/geoRoutes');

const app = express();
app.use(express.json());

app.use('/api', geoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌍 Server running on http://localhost:${PORT}`);
});
