const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
