const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  try {
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// DELETE user by ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};

// PUT - Update user by ID
exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(400);
    return next(new Error("Name is required"));
  }

  try {
    const user = await User.findByIdAndUpdate(id, { name }, { new: true });

    if (!user) {
      res.status(404);
      return next(new Error("User not found"));
    }

    res.json({ message: "User updated", user });
  } catch (err) {
    next(err);
  }
};


