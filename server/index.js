const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static("business-plan")); // Serve static files like PDFs and PPTs

app.get("/api/status", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
