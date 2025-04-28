const users = require('../data/users');

// Get all users
const getUsers = (req, res) => {
  res.json(users);
};

// Add a user
const addUser = (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now().toString(); // simple ID
  users.push(newUser);
  res.status(201).json({ message: 'User added', user: newUser });
};

// Delete a user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getUsers, addUser, deleteUser };
