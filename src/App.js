import React from "react";
import "./styles/App.scss";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
   const router = useRoutes(routes);

   return <>{router}</>;
}

export default App;
