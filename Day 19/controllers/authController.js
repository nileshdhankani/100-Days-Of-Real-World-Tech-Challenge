const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({
    message: 'Sanitized input accepted!',
    user: { name, email },
  });
};

module.exports = { registerUser };
