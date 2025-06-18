const multer = require('multer');

// Store file in memory for Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;
