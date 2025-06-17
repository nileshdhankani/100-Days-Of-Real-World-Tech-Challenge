### 📄 test.md – Day 14: Image Upload API

---

#### ✅ Test Case 1: Upload Image

**Endpoint:**
`POST /api/images/upload`

**Request:**

* Use `form-data`
* Key: `image` (type: file)
* Value: Any image file (e.g., `.png`, `.jpg`, `.jpeg`)

**Expected Response:**

```json
{
  "message": "Image uploaded",
  "url": "http://localhost:5000/uploads/<uploaded_filename>"
}
```

**Verify:**

* Open the `url` in browser — image should be visible.

---

#### ✅ Test Case 2: Preview Image

**Action:**
Use the `url` from the response of Test Case 1 and open it in the browser.

**Expected:**

* Image should be displayed properly.

---

#### ✅ Test Case 3: Delete Existing Image

**Endpoint:**
`DELETE /api/images/:filename`

**Example URL:**
`DELETE http://localhost:5000/api/images/1718307724123-cat.jpg`

**Expected Response:**

```json
{
  "message": "Image deleted successfully"
}
```

**Verify:**

* Try opening the image URL from Test 2 again.
* It should return a **404 Not Found**.

---

#### ❌ Test Case 4: Delete Non-existent Image

**Endpoint:**
`DELETE /api/images/invalid-name.jpg`

**Expected Response:**

```json
{
  "message": "Image not found"
}
```

**Status Code:**
404 Not Found

---

### 🧪 Notes

* Make sure the `uploads/` folder exists.
* Only image files should be uploaded.
* Optionally, you can restrict file types in Multer config.
