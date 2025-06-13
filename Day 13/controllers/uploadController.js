const asyncHandler = require('express-async-handler');

const uploadFile = asyncHandler((req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }

  res.status(200).json({
    message: 'File uploaded successfully!',
    filePath: `/uploads/${req.file.filename}`,
  });
});

module.exports = { uploadFile };
