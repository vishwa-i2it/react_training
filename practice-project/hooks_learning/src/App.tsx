import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Search } from "./components/search";
import { useCallback, useState } from "react";
import { Result } from "./components/result";

const queryClient = new QueryClient();

function App() {
  const [result, setResult] = useState(null);

  const handleResult = useCallback((data: any) => {
    setResult(data);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Search onResult={handleResult} />
      <Result data={result} />
    </QueryClientProvider>
  );
}

export default App;
