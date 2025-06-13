# Day 13 – Test Cases for File Upload API

## ✅ 1. Upload valid image file
- Endpoint: POST /api/upload
- Body: form-data (key = file, type = File)
- File: Select an image file (e.g., JPG or PNG)
- Expected: 200 OK
- Response: { message: "File uploaded successfully", filePath: "/uploads/filename.jpg" }

## ❌ 2. Upload non-image file
- File: Select a `.txt` or `.pdf`
- Expected: 500 Error - Only image files are allowed

## ❌ 3. Upload with no file
- Send POST request without a file
- Expected: 400 Bad Request - "No file uploaded"
