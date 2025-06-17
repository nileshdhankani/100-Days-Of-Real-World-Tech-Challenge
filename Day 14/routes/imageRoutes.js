const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadImage, deleteImage } = require('../controllers/imageController');

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
router.post('/upload', upload.single('image'), uploadImage);
router.delete('/:filename', deleteImage);

module.exports = router;
