# Day 11 – Test Cases for Logout & Token Invalidation

### ✅ 1. Register User
- **POST** `/api/auth/register`
- Body: `{ "name": "Nilesh", "email": "nilesh@example.com", "password": "123456" }`
- ✅ Expect 201 Created, returns access and refresh tokens

### ✅ 2. Login User
- **POST** `/api/auth/login`
- Body: `{ "email": "nilesh@example.com", "password": "123456" }`
- ✅ Expect 200 OK, returns access and refresh tokens

### ✅ 3. Logout User
- **POST** `/api/auth/logout`
- Body: `{ "refreshToken": "<token>" }`
- ✅ Expect 200 OK with `Logged out successfully`

### ⛔ 4. Logout Without Token
- **POST** `/api/auth/logout`
- Body: `{}`
- ❌ Expect 400 Bad Request

### ⛔ 5. Logout with Invalid Token
- **POST** `/api/auth/logout`
- Body: `{ "refreshToken": "invalidtoken" }`
- ✅ Still returns 204 or handles it silently
