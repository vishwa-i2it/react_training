// websocket.js
const WebSocket = require("ws");
const { getCurrency } = require("./currencyService");

function startWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });
  const subscriptions = new Map(); // ws -> currency

  wss.on("connection", (ws) => {
    console.log("WebSocket client connected");

    ws.send(
      JSON.stringify({
        type: "CONNECTED",
        message: "Connected to currency stream",
      })
    );

    ws.on("message", (msg) => {
      const data = JSON.parse(msg.toString());

      if (data.type === "SUBSCRIBE") {
        subscriptions.set(ws, data.country);
      }

      if (data.type === "UNSUBSCRIBE") {
        subscriptions.delete(ws);
      }
    });

    ws.on("close", () => {
      subscriptions.delete(ws);
      console.log("WebSocket client disconnected");
    });
  });

  // Broadcast updates
  setInterval(() => {
    for (const [ws, country] of subscriptions.entries()) {
      if (ws.readyState === WebSocket.OPEN) {
        try {
          const payload = getCurrency(country);

          ws.send(
            JSON.stringify({
              type: "PRICE_UPDATE",
              data: payload,
            })
          );
        } catch (err) {
          ws.send(
            JSON.stringify({
              type: "ERROR",
              message: err.message,
            })
          );
        }
      }
    }
  }, 2000);
}

module.exports = { startWebSocketServer };
