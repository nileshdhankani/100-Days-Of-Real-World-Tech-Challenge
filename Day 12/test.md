### ✅ Day 12 – Test Cases for Secure Password Reset API

#### 🔐 Feature: Secure Password Reset (with email token and reset link)

---

### 📌 1. Request Password Reset - Valid Email

**Endpoint:** `POST /api/auth/request-reset`
**Body:**

```json
{
  "email": "existinguser@example.com"
}
```

**Expected:**

* `200 OK`
* Response: `"Password reset link sent to your email"`

---

### ❌ 2. Request Password Reset - Non-existent Email

**Body:**

```json
{
  "email": "notfound@example.com"
}
```

**Expected:**

* `404 Not Found`
* Response: `"User with that email does not exist"`

---

### 🧪 3. Password Reset Email Token Validity

**Steps:**

1. Make request to `/api/auth/request-reset`
2. Get token from email log or Mailtrap
3. Check token is:

   * JWT format
   * Valid for 15 minutes

---

### ✅ 4. Reset Password - Valid Token

**Endpoint:** `POST /api/auth/reset-password/:token`
**Body:**

```json
{
  "password": "NewSecurePassword123"
}
```

**Expected:**

* `200 OK`
* Response: `"Password reset successful"`

---

### ⛔ 5. Reset Password - Expired or Tampered Token

**URL:** Use a fake/expired token like `/reset-password/invalidtoken123`

**Expected:**

* `400 Bad Request`
* Response: `"Invalid or expired token"`

---

### ❌ 6. Reset Password - Missing Password Field

**Body:**

```json
{}
```

**Expected:**

* `400 Bad Request`
* Response: `"Password is required"`

---

### ✅ 7. Login After Password Reset

**Endpoint:** `POST /api/auth/login`
**Body:**

```json
{
  "email": "existinguser@example.com",
  "password": "NewSecurePassword123"
}
```

**Expected:**

* `200 OK`
* Response contains:

  * JWT token
  * User data

---

### 🛡️ 8. Token Cannot Be Reused

**Step:**

* Use the same token twice

**Expected:**

* Second request fails with:

  * `400 Bad Request`
  * `"Token has already been used or expired"`

