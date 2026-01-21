import { useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";
import UseLayoutEffect from "./useLayoutEffect";
import UseReducer from "./useReducer";
import UseRef from "./useRef";
import UseState from "./useState_useEffect";

function Test() {
  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@trade"
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const price = Number.parseFloat(data.p).toFixed(2);
      console.log(price);
    };

    return () => socket.close();
  }, []);

  return (
    <ThemeProvider>
      <UseState />
      <UseRef />
      <UseLayoutEffect />
      <UseReducer />
    </ThemeProvider>
  );
}

export default Test;
