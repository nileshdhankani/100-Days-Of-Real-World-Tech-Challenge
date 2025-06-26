# ✅ Day 22: CORS Whitelisting Test Cases

### 1. Allowed Origin
- Request from: http://localhost:3000
✅ 200 OK
✅ Access-Control-Allow-Origin header present

---

### 2. Not Allowed Origin
- Request from: http://malicious.com
❌ Blocked by CORS
❌ Error: Not allowed by CORS

---

### 3. No Origin (curl / Postman)
✅ Allowed by default (server-to-server or testing tools)
