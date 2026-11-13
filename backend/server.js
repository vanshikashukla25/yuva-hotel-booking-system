
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("Welcome to KAD Stays Backend!");
});

// Health check API
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "KAD Stays server is running!"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`KAD Stays backend running on port ${PORT}`);
});
