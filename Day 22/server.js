const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Whitelist allowed domains
const whitelist = ['http://localhost:3000', 'https://myfrontend.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true); // Allow
    } else {
      callback(new Error('Not allowed by CORS')); // Block
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// 📦 Sample route
app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS-protected data sent successfully 🔐' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
