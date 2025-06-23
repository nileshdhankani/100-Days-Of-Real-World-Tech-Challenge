const User = require('../models/userModel');

const searchUsers = async (req, res) => {
  const { name, email, minAge, maxAge } = req.query;

  let filter = {};

  if (name) {
    filter.name = { $regex: name, $options: 'i' }; // case-insensitive
  }

  if (email) {
    filter.email = { $regex: email, $options: 'i' };
  }

  if (minAge || maxAge) {
    filter.age = {};
    if (minAge) filter.age.$gte = parseInt(minAge);
    if (maxAge) filter.age.$lte = parseInt(maxAge);
  }

  const users = await User.find(filter);
  res.json(users);
};

module.exports = { searchUsers };
