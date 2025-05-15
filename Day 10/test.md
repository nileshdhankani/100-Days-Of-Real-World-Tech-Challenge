# ✅ Day 10 Test Cases - Refresh Tokens & Secure Token Storage

### 1. User Login (POST /api/login)
- Input: { "email": "test@example.com", "password": "123456" }
- Expected:
  - Status: 200 OK
  - Response: { accessToken }
  - HttpOnly Cookie: refreshToken

---

### 2. Access Protected Route Without Token
- GET /api/protected (no Authorization header)
- Expected: 401 Unauthorized
- Message: "Not authorized, token missing"

---

### 3. Access Protected Route With Valid Access Token
- Authorization: Bearer <accessToken>
- Expected: 200 OK
- Message: "You have accessed a protected route"

---

### 4. Get New Access Token via Refresh Token (POST /api/token)
- Cookie: refreshToken (sent automatically if stored)
- Expected: 200 OK
- Response: { accessToken }

---

### 5. Use Invalid/Expired Refresh Token
- Tampered or expired token
- Expected: 403 Forbidden
- Message: "Invalid refresh token"
