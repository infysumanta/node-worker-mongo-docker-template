const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from server!",
  });
});

app.get("/health", (req, res) => {
  res.json({
    message: "Server is healthy!",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
