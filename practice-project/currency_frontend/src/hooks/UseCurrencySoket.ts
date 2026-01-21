import { useQueryClient } from "@tanstack/react-query";
import { useRef, useEffect } from "react";

export function useCurrencySocket(country: string, active: boolean) {
  const socketRef = useRef<WebSocket | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    socketRef.current ??= new WebSocket("ws://localhost:3000");

    const socket = socketRef.current;

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "PRICE_UPDATE") {
        queryClient.setQueryData(["currency", msg.data.country], msg.data);
      }
    };

    if (socket.readyState === WebSocket.OPEN) {
      if (active) {
        socket.send(JSON.stringify({ type: "SUBSCRIBE", country }));
      } else {
        socket.send(JSON.stringify({ type: "UNSUBSCRIBE" }));
      }
    }

    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: "UNSUBSCRIBE" }));
      }
    };
  }, [country, active, queryClient]);
}
