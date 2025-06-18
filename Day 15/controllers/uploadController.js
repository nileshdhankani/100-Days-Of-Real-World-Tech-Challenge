const asyncHandler = require('express-async-handler');
const cloudinary = require('../config/cloudinary');

// Upload image
const uploadToCloudinary = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }

  const result = await cloudinary.uploader.upload_stream(
    { folder: 'uploads' },
    (error, result) => {
      if (error) throw new Error(error.message);
      res.status(200).json({
        message: 'Upload successful',
        url: result.secure_url,
        public_id: result.public_id,
      });
    }
  );

  // Pipe image to Cloudinary
  require('streamifier').createReadStream(req.file.buffer).pipe(result);
});

// Delete image
const deleteFromCloudinary = asyncHandler(async (req, res) => {
  const publicId = req.params.public_id;
  await cloudinary.uploader.destroy(publicId);
  res.json({ message: 'Deleted from Cloudinary' });
});

module.exports = {
  uploadToCloudinary,
  deleteFromCloudinary,
};
