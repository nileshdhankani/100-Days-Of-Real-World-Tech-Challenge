const express = require('express');
const router = express.Router();
const { getUsers, addUser, deleteUser } = require('../controllers/userController');

// GET all users
router.get('/', getUsers);

// POST a new user
router.post('/', addUser);

// DELETE a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
