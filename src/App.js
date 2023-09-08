import React from "react";
import "./styles/App.scss";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import DataProvider from "./contexts/DataContext";

function App() {
   const router = useRoutes(routes);

   return <DataProvider>{router}</DataProvider>;
}

export default App;
