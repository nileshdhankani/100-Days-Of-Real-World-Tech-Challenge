const fs = require('fs');
const path = require('path');
const asyncHandler = require('express-async-handler');

// Upload image
const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.status(201).json({ message: 'Image uploaded', url: imageUrl });
});

// Delete image
const deleteImage = asyncHandler(async (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, `../uploads/${filename}`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.json({ message: 'Image deleted successfully' });
  } else {
    res.status(404);
    throw new Error('Image not found');
  }
});

module.exports = { uploadImage, deleteImage };
