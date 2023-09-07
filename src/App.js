import React from "react";
import "./styles/App.scss";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
   const router = useRoutes(routes);
   const client = new QueryClient();
   return (
      <QueryClientProvider client={client}>
         {router}
         <ReactQueryDevtools />
      </QueryClientProvider>
   );
}

export default App;
