// index.js
const express = require("express");
const http = require("http");
const { getCurrency } = require("./currencyService");
const { startWebSocketServer } = require("./websocket");

const app = express();
const server = http.createServer(app);
const PORT = 3000;

/* ---------------- HTTP API ---------------- */

app.get("/currency", (req, res) => {
  try {
    const { country } = req.query;
    const data = getCurrency(country);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ---------------- WebSocket ---------------- */

startWebSocketServer(server);

/* ---------------- Start Server ---------------- */

server.listen(PORT, () => {
  console.log(`HTTP API  : http://localhost:${PORT}`);
  console.log(`WebSocket : ws://localhost:${PORT}`);
});
