const express = require('express');
const { login, getAccessToken, protectedRoute } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/login', login);
router.post('/token', getAccessToken);
router.get('/protected', protect, protectedRoute);

module.exports = router;
