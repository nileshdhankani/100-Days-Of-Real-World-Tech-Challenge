# ✅ Day 16 - Rate Limiter Test Cases

### 1. Hit within rate limit
- Method: GET /api/ping
- Expected: 200 OK, "pong 🏓"

### 2. Hit over 100 times within 15 minutes
- Expected: 429 Too Many Requests
- Message: Too many requests from this IP...

### 3. Wait 15 mins and try again
- Expected: 200 OK after window resets
