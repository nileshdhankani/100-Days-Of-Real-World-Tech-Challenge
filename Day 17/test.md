# ✅ Day 17 - API Logging Middleware Test Cases

### 1. GET /api/ping
- Expected Console Output:
  [timestamp] GET /api/ping 200 - 2.500 ms

- Expected File Output (access.log):
  [timestamp] GET /api/ping 200 - 2.500 ms

### 2. Invalid Route
- GET /api/unknown
- Logs: Should still show timestamp, method, status 404
