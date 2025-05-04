const User = require('../models/userModel');

const getUsers = async (req, res, next) => {
  try {
    const { name, page = 1, limit = 10 } = req.query;
    const query = name ? { name: new RegExp(name, 'i') } : {};

    const users = await User.find(query)
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .exec();

    const count = await User.countDocuments(query);

    res.status(200).json({
      total: count,
      page: parseInt(page),
      limit: parseInt(limit),
      users
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers };
