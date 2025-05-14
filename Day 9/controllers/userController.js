const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

module.exports = { getProfile };