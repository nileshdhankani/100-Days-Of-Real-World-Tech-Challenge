const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong 🏓');
});

module.exports = router;
