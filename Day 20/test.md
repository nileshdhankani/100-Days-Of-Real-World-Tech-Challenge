# Day 20 – MongoDB Query Filter Tests

### 1. Search by name (case-insensitive)
GET /api/users?name=nilesh
✅ Returns users with names like "Nilesh", "nILeSh", etc.

---

### 2. Search by email
GET /api/users?email=@gmail
✅ Returns users with emails containing '@gmail'

---

### 3. Age filter (range)
GET /api/users?minAge=20&maxAge=30
✅ Returns users aged between 20 and 30

---

### 4. Combined filter
GET /api/users?name=ni&email=@example.com&minAge=18
✅ Returns users matching all criteria
