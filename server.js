// server.js
const express = require("express");
const app = express();
const PORT = 3000;
const DEBUG_PORT = 9229;

app.get("/", (req, res) => {
  console.log("Server 1 - Request received");
  debugger; // Breakpoint for testing
  const data = {
    server: "Server 1",
    message: "Hello from Server 1",
    timestamp: new Date(),
  };
  res.json(data);
});

app.get("/debug-test", (req, res) => {
  debugger;
  const result = {
    server: "Server 1",
    query: req.query,
    processed: true,
  };
  res.json(result);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server 1 running on http://0.0.0.0:${PORT}`);
  console.log(`Debug on port ${DEBUG_PORT}`);
});
