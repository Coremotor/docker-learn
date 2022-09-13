import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Todos from "src/pages/todos";
import { theme } from "src/styling/theme";
import Layout from "src/shared/layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Todos />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
