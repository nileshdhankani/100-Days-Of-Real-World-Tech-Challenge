# ✅ Day 19 - Input Sanitization Test Cases

### 1. Valid input with extra spaces
Request:
{
  "name": "   Nilesh   ",
  "email": "  nilesh@example.com  ",
  "password": " secret123 "
}
✅ Output:
- Name: "Nilesh"
- Email: "nilesh@example.com"

---

### 2. HTML/script injection attempt
{
  "name": "<script>alert('hacked')</script>",
  "email": "hacker@example.com",
  "password": "<b>bold</b>"
}
✅ Output:
- Name: "&lt;script&gt;alert('hacked')&lt;/script&gt;"
- Password: "&lt;b&gt;bold&lt;/b&gt;"
✅ App safely escapes content

---

### 3. Invalid email
{
  "name": "User",
  "email": "not-an-email",
  "password": "secret123"
}
❌ 422 - "Enter a valid email"
