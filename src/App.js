import React from "react";
import "./styles/App.scss";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
   const router = useRoutes(routes);
   const client = new QueryClient({
      defaultOptions: {
         queries: {
            cacheTime: 60000, //cash for 1 minute
            staleTime: 1000, //stale after 5 seconds
         },
      },
   });
   
   return (
      <QueryClientProvider client={client}>
         {router}
         <ReactQueryDevtools />
      </QueryClientProvider>
   );
}

export default App;
