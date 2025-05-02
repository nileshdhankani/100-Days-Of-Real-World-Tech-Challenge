const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");

dotenv.config();
const app = express();
connectDB();

app.use(express.json()); // middleware
app.use("/api", userRoutes); // routes

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.use(notFound);        
app.use(errorHandler);  
