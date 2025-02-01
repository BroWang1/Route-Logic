const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "../client/build")));

// API endpoint (optional, can keep it)
app.get("/api/status", (req, res) => {
  res.json({ message: "Server is running" });
});

// Serve business plan files (if stored in a separate folder)
app.use(express.static("business-plan"));

// Handle React routes (fixes refresh issue)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
