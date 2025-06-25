# ✅ Day 21 - IP Geolocation API Tests

### 1. Normal request
GET /api/location

✅ 200 OK
✅ Returns country, city, coordinates, etc.

---

### 2. Simulated IP address
Use Postman: Add Header:
Key: `x-forwarded-for`
Value: `8.8.8.8`

✅ Should return USA info (Google DNS)

---

### 3. Invalid or private IP
Send: 127.0.0.1 or ::1

❌ 404
❌ Message: Could not determine location
