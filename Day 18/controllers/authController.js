const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({
    message: 'User registered successfully!',
    data: { name, email },
  });
};

module.exports = { registerUser };
