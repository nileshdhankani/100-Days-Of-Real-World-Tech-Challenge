const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

// Register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) throw new Error('All fields are required');

  const userExists = await User.findOne({ email });
  if (userExists) throw new Error('User already exists');

  const user = await User.create({ name, email, password });

  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  user.refreshToken = refreshToken;
  await user.save();

  res.status(201).json({ accessToken, refreshToken });
});

// Login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  user.refreshToken = refreshToken;
  await user.save();

  res.json({ accessToken, refreshToken });
});

// Logout
const logoutUser = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(400);
    throw new Error('Refresh token required');
  }

  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.status(204).json({ message: 'Logged out' });
    return;
  }

  user.refreshToken = null;
  await user.save();

  res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = { registerUser, loginUser, logoutUser };
