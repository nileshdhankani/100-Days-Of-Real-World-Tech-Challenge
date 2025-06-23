const express = require('express');
const router = express.Router();
const { searchUsers } = require('../controllers/userController');

router.get('/users', searchUsers);

module.exports = router;
