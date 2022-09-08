import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todos from "src/pages/todos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>Hello from Frontend dev</div>
      <Todos />
    </QueryClientProvider>
  );
}

export default App;
