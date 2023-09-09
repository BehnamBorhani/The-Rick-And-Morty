import React from "react";
import "./styles/App.scss";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
   const router = useRoutes(routes);

   return (
      <>
         {router}
         <ScrollToTop />
      </>
   );
}

export default App;
