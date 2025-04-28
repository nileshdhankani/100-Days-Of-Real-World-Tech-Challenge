const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // Middleware to parse JSON
app.use('/users', userRoutes); // Mount routes

app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
