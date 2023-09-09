import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         cacheTime: 1000 * 60 * 60 * 24, //cash for 1 Day
         staleTime: 1000 * 10, //stale after 10 seconds
      },
   },
});

const localStoragePersistor = createSyncStoragePersister({
   storage: window.localStorage,
});

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister: localStoragePersistor }}
         >
            <App />
            <ReactQueryDevtools />
         </PersistQueryClientProvider>
      </BrowserRouter>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
