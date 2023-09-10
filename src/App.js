import React from "react";
import "./styles/App.scss";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
   const router = useRoutes(routes);
   Aos.init();
   return (
      <>
         {router}
      </>
   );
}

export default App;
