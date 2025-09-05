// server2.js
const express = require("express");
const app = express();
const PORT = 3001;
const DEBUG_PORT = 9230;

app.get("/", (req, res) => {
  console.log("Server 2 - Request received");
  debugger; // Breakpoint for testing
  const data = {
    server: "Server 2",
    message: "Hello from Server 2",
    timestamp: new Date(),
  };
  res.json(data);
});

app.get("/debug-test", (req, res) => {
  debugger;
  const result = {
    server: "Server 2",
    query: req.query,
    processed: true,
  };
  res.json(result);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server 2 running on http://0.0.0.0:${PORT}`);
  console.log(`Debug on port ${DEBUG_PORT}`);
});
