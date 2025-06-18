const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require('../controllers/uploadController');

// POST /api/upload
router.post('/upload', upload.single('image'), uploadToCloudinary);

// DELETE /api/delete/:public_id
router.delete('/delete/:public_id', deleteFromCloudinary);

module.exports = router;
