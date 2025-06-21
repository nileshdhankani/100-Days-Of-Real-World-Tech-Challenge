# ✅ Day 18 - Request Validation with express-validator

### 1. Valid Registration
POST /api/register
Body:
{
  "name": "Nilesh",
  "email": "nilesh@example.com",
  "password": "secret123"
}
✅ Expected: 201 Created

---

### 2. Missing Name
POST /api/register
{
  "email": "test@example.com",
  "password": "secret123"
}
❌ Expected: 422 Unprocessable Entity - "Name is required"

---

### 3. Invalid Email
{
  "name": "John",
  "email": "notanemail",
  "password": "secret123"
}
❌ Expected: 422 - "Valid email is required"

---

### 4. Short Password
{
  "name": "John",
  "email": "john@example.com",
  "password": "123"
}
❌ Expected: 422 - "Password must be at least 6 characters"
