const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { createUser } = require("./controllers/userController");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.post("/api/users", createUser);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
