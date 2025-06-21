const express = require('express');
const { body } = require('express-validator');
const { registerUser } = require('../controllers/authController');
const validateRequest = require('../middleware/validationMiddleware');

const router = express.Router();

router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  validateRequest,
  registerUser
);

module.exports = router;
