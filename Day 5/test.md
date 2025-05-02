```markdown
# ✅ Day 5 – Centralized Error Handling in Express.js

This document contains test cases to verify that the centralized error handling and 404 handling middleware in the Day 5 API setup are working correctly.

---

## 🔁 Base URL

```

[http://localhost:3000/api/users](http://localhost:3000/api/users)

````

---

## 🧪 Test Cases

### 1. ✅ Create User – Success

**Method:** POST  
**Endpoint:** `/api/users`  
**Body:**
```json
{
  "name": "Nilesh"
}
````

**Expected Response:**

* Status: `201 Created`
* Body:

```json
{
  "message": "User created",
  "user": {
    "_id": "...",
    "name": "Nilesh"
  }
}
```

---

### 2. ❌ Create User – Missing Name

**Method:** POST
**Endpoint:** `/api/users`
**Body:**

```json
{
  "email": "test@example.com"
}
```

**Expected Response:**

* Status: `400 Bad Request`
* Body:

```json
{
  "error": "Name is required"
}
```

---

### 3. ❌ Get User – Invalid ID Format

**Method:** GET
**Endpoint:** `/api/users/123abc`

**Expected Response:**

* Status: `500 Internal Server Error`
* Body:

```json
{
  "error": "Cast to ObjectId failed"
}
```

---

### 4. ✅ Update User – Success

**Method:** PUT
**Endpoint:** `/api/users/:validId`
**Body:**

```json
{
  "name": "Updated Name"
}
```

**Expected Response:**

* Status: `200 OK`
* Body:

```json
{
  "message": "User updated",
  "user": {
    "_id": "...",
    "name": "Updated Name"
  }
}
```

---

### 5. ❌ Update User – Nonexistent ID

**Method:** PUT
**Endpoint:** `/api/users/661b00abcdef123456789999`
**Body:**

```json
{
  "name": "Someone"
}
```

**Expected Response:**

* Status: `404 Not Found`
* Body:

```json
{
  "error": "User not found"
}
```

---

### 6. ✅ Delete User – Success

**Method:** DELETE
**Endpoint:** `/api/users/:validId`

**Expected Response:**

* Status: `200 OK`
* Body:

```json
{
  "message": "User deleted"
}
```

---

### 7. ❌ Route Not Found

**Method:** GET
**Endpoint:** `/api/unknownRoute`

**Expected Response:**

* Status: `404 Not Found`
* Body:

```json
{
  "error": "Not Found - /api/unknownRoute"
}
```

---

## 🧪 Notes

* Make sure to test using a REST client like Postman or Thunder Client.
* Replace `:validId` with a real user ID from your database.
* Stack traces are hidden in `production` mode as expected.

---

✔️ With these tests, you can confidently ensure your error flow is working exactly as intended.
