// server.js
const express = require("express");
const { getCurrency } = require("./currencyService");

const app = express();
const port = 3000;

app.get("/currency", (req, res) => {
  try {
    const { country } = req.query;
    const data = getCurrency(country);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`HTTP API running at http://localhost:${port}`);
});
