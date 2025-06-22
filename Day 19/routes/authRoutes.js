const express = require('express');
const { body } = require('express-validator');
const { registerUser } = require('../controllers/authController');
const validateRequest = require('../middleware/validationMiddleware');

const router = express.Router();

router.post(
    '/register',
    [
        body('name')
            .notEmpty().withMessage('Name is required')
            .trim()
            .escape(),
        body('email')
            .trim()
            .isEmail().withMessage('Enter a valid email')
            .normalizeEmail(),
        body('password')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
            .trim()
            .escape(),
    ],
    validateRequest,
    registerUser
);

module.exports = router;
