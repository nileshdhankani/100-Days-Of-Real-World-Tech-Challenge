const User = require('../models/userModel');

const getUsers = async (req, res, next) => {
  try {
    let query = User.find();

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt'); // Default sort by latest
    }

    // Field Selection
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v'); // Default: exclude __v
    }

    const users = await query;
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
};
