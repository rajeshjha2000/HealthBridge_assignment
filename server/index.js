const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/contacts", contactRoutes);
app.use("/api/chatbot", chatbotRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Healthcare Support API is running" });
});

// start server first (don't wait for MongoDB)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// connect to mongodb (non-blocking)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.log("⚠️  MongoDB connection failed - running without database");
    console.log("   Chatbot will work, but form submissions won't be saved");
  });
