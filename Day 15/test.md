# ✅ Day 15 - Cloudinary Upload API Test Cases

### 1. Upload Image (POST `/api/upload`)
- [x] Input: image file in form-data as `image`
- [x] Output: 200 OK with `url` and `public_id`

### 2. Upload No File
- [x] Input: No file
- [x] Output: 400 Bad Request

### 3. Delete Image (DELETE `/api/delete/:public_id`)
- [x] Input: Valid `public_id`
- [x] Output: 200 OK with confirmation

### 4. Delete Invalid ID
- [x] Input: Wrong `public_id`
- [x] Output: Cloudinary error
